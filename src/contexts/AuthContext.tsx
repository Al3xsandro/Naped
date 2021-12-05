import { 
    createContext,
    ReactNode,
    useEffect, 
    useState
} from "react";

import Router from 'next/router';

import { toast } from "react-toastify";

import { api } from "../services/api";

import { destroyCookie, setCookie, parseCookies } from 'nookies';

type signUp = {
    email: string;
    username: string;
    password: string;
}

type signIn = {
    email: string;
    password: string;
}

type User = {
    id: string;
    email: string;
    username?: string;
    isVerified?: boolean;
    created_at?: Date;
    roles?: string;
}

type IResponse = {
    data: {
        token?: string;
        user: User;
    }
}

interface AuthContextData {
    isAuthenticated: boolean;
    user: User | null;
    signUp({ username, email, password }: signUp): Promise<void>;
    signIn({ email, password }: signIn): Promise<void>;
    isLoading: boolean;
};

interface AuthContextProviderProps {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthContextProviderProps){
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const isAuthenticated = !!user;

    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies['naped.token'];

        if(token) {
            const user = async () => await api.get<User>('/users/me');
    
            user()
                .then((response) => {
                    const data = response.data;
                    setUser(data);
                })
                .catch((err) => {
                    toast.error(err.response.data.message);
                    destroyCookie(err, 'naped.token');
                });
        }
    }, []);
    
    async function signUp({ 
        email,
        username,
        password
    }: signUp) {
        try {
            setIsLoading(true);

            await api.post('/users/create', {
                email,
                username,
                password
            });

            toast.success('Account created successfully');

            setIsLoading(false);

            Router.push('/signIn');
        } catch (err) {
            toast.error(err.response.data.error);
            setIsLoading(false);
        }
    }

    async function signIn({
        email,
        password
    }: signIn) {
        try {
            setIsLoading(true);

            const { data }: IResponse = await api.post('/users/auth', {
                email,
                password
            });
            
            setCookie(undefined, 'naped.token', data.token, {
                maxAge: 60 * 60 * 24 // 1 day
            })
            
            api.defaults.headers['Authorization'] = `Bearer ${data.token}`;

            setUser(data.user);

            setIsLoading(false);

            Router.push('/dashboard');
        } catch (err) {
            toast.error(err.response.data.error);
            setIsLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{ 
            isAuthenticated,
            user,
            signUp,
            signIn,
            isLoading 
        }}>
            { children }
        </AuthContext.Provider>
    )
};
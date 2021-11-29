import {
    FormEvent,
    useState
} from "react";

import { withSSRGuest } from "../utils/withSSRGuest";

import { Container, Form } from '../styles/pages/signUp.style';

import { Header } from "../components/Header/Header.component";
import { Footer } from "../components/Footer/Footer.component";

import { useAuth } from "../hooks/useAuth";

import { ClipLoader } from 'react-spinners';

export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, isLoading } = useAuth();

    async function handleSubmit (event: FormEvent) {
        event.preventDefault();
        
        if(!email.trim() || !password){
            return;
        };
        
        await signIn({ email, password });
    }

    return (
        <>
            <Header/>

            <Container>
                <Form onSubmit={handleSubmit}>
                    <h1 className="form__title">Entrar</h1>

                    <label>
                        <span>Email</span>
                        <input 
                            type="email"
                            placeholder="Email.."
                            onChange={event => setEmail(event.target.value)}
                            required
                        />
                    </label>

                    <label>
                        <span>Senha</span>
                        <input 
                            type="password"
                            placeholder="Senha.."
                            onChange={event => setPassword(event.target.value)}
                            required
                        />
                    </label>

                    <button className="button" type="submit">
                        { !isLoading ? "Entrar" : <ClipLoader size="20" color="#ffff" /> }
                    </button>
                </Form>
            </Container>

            <Footer/>
        </>
    )
}

export const getServerSideProps = withSSRGuest(async ctx => {
    return {
        props: {}
    };
});
import type { AppProps } from 'next/app';

import { AuthProvider } from '../contexts/AuthContext';

import GlobalStyle from '../styles/GlobalStyles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function MyApp({ Component, pageProps}: AppProps){
    return (
        <AuthProvider>
            <GlobalStyle/>
            
            <Component {...pageProps }/>
            
            <ToastContainer style={{ padding: '1rem' }}/>
        </AuthProvider>
    );
};
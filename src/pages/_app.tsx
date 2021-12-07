import type { AppProps } from 'next/app';

import { AuthProvider } from '../contexts/AuthContext';

import GlobalStyle from '../styles/GlobalStyles';
import '../assets/nprogress/nprogress.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Nprogress } from '../utils/useNprogress';

export default function MyApp({ Component, pageProps}: AppProps) {
    return (
        <AuthProvider>
            <GlobalStyle/>
            
            <Nprogress/>

            <Component {...pageProps }/>
            
            <ToastContainer style={{ padding: '1rem' }}/>
        </AuthProvider>
    );
};
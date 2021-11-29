import {
     GetServerSideProps,
     GetServerSidePropsContext,
     GetServerSidePropsResult
} from 'next';

import { api } from '../services/api';

import { destroyCookie, parseCookies } from 'nookies';

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        const token = cookies['naped.token'];

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        if (!token) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false
                }
            };
        }

        try {
            return await fn(ctx);
        } catch (err) {
        destroyCookie(ctx, 'naped.token');
    
        return {
            redirect: {
                    destination: '/',
                    permanent: false
                }
            };
        }
    };
};
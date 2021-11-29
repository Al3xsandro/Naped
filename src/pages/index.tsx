import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import { withSSRGuest } from '../utils/withSSRGuest';

import { Header } from '../components/Header/Header.component';
import { Footer } from '../components/Footer/Footer.component';

import { 
    Container,
    Grid
} from '../styles/pages/index.style';

export default function Home() {
    return (
        <>
            <Head>
                <title>Naped | home</title>
            </Head>

            <Header/>

            <Container>
                <Grid>
                    <div className="container__title">
                        <h2 className="title">
                            Mundo nerd?
                            Naped!
                        </h2>
                        <p className="description">
                            Conheça a naped e fique conetado com as novidades
                            do mundo nerd.
                        </p>

                        <Link href="/signUp">
                            <a className="button">Cadastrar-se</a>
                        </Link>
                    </div>

                    <div className="container__logo">
                        <Image
                            src="/images/welcome.svg"
                            className="grid_image"
                            width={'500'}
                            height={'330'}
                            alt="Welcome art picture"
                            quality={100}
                            loading='lazy'
                        />
                    </div>
                </Grid>
            </Container>

            <Footer/>
        </>
    )
};

export const getServerSideProps = withSSRGuest(async ctx => {
    return {
        props: {}
    };
});
import { 
    Grid,
    Header,
    Section
} from "../styles/pages/404.style"

import Image from 'next/image';
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Header>
                <div className="container">
                    <h1 className="title">Naped</h1>
                </div>
            </Header>
            <Grid>
                <Section>
                    <div className="container__title">
                        <h2 className="title">
                            Tenho más notícias para você!
                        </h2>
                        <p className="description">
                            A página que você está procurando pode ter
                            sido removida ou está temporariamente
                            indisponível.
                        </p>

                        <Link href="/">
                            <a className="button">Voltar a home</a>
                        </Link>
                    </div>
                </Section>
                <div className="container__image">
                    <Image 
                        src="/images/404.svg"
                        width={'500'}
                        height={'330'}
                        alt="Welcome art picture"
                        quality={100}
                        loading='lazy'        
                    />

                    <p className="description">
                        Ups! Você chegou no espaço...
                        volte para o mundo nerd!
                    </p>
                </div>
            </Grid>
        </>
    )
}
import { Container, Navigation } from "./Header.style";

import { FiMenu } from 'react-icons/fi'
import { BiMenuAltRight } from 'react-icons/bi';

import Link from 'next/link';

import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export function Header() {
    const { isAuthenticated } = useAuth();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <div className="header__logo">
                <h1 className="header__title">
                    Naped
                </h1>
            </div>

            <Navigation>
                <ul className={ !isOpen ? 'menu' : 'menu_mobile' }>
                    <li>
                        <Link href="/">
                            <a onClick={() => setIsOpen(false)} className="title">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a onClick={() => setIsOpen(false)} className="title">Séries</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a onClick={() => setIsOpen(false)} className="title">Filmes</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a onClick={() => setIsOpen(false)}  className="title">Animes</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a onClick={() => setIsOpen(false)}  className="title">Games</a>
                        </Link>
                    </li>
                </ul>

                <div className={ !isOpen ? 'nav__account' : 'nav_mobile'}>
                    {
                        isAuthenticated ? (
                            <>
                                <Link href="/me">
                                    <a onClick={() => setIsOpen(false)} className="button">Minha conta</a>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/signIn">
                                    <a onClick={() => setIsOpen(false)} className="button">Entrar</a>
                                </Link>
                            </>
                        )
                    }
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="menu_button">
                    {
                        !isOpen ? <FiMenu style={{ color: '#ffff', margin: '1rem' }} size={40} /> : 
                        <BiMenuAltRight  style={{ 
                            top: 0,
                            right: 0,
                            position: 'fixed',
                            color: '#a984ff',
                            margin: '1rem'
                        }} size={40} />
                    }
                </button>
            </Navigation>
        </Container>
    );
};
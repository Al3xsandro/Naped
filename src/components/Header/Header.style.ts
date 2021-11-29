import styled from "styled-components";

export const Container = styled.header`
    height: 5.6rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .header__logo {
        padding: 1.5rem 3rem;
        
        .header__title {
            color: var(--title-color);
            font-family: 'Lexend', sans-serif;
            font-size: 1.5rem;
            line-height: 1.9;
        }
    }
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    
    .menu_mobile {
        height: 100vw;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: fixed;

        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background: #13131F;
        height: 100vh;

        z-index: 1;

        ul, li {
            list-style: none;
            
            .title {
                font-size: 1.5rem;

                font-weight: bold;
                font-family: Roboto, sans-serif;
                
                color: #ffff;
                cursor: pointer;

                text-decoration: none;

                line-height: 4;

                &:hover {
                    border-bottom: 2px solid #8257E6;
                    filter: brightness(0.9);
                    transition: 0.1s;
                }
            }
        }
        
    }
    
    .menu {
        display: flex;
        list-style: none;
    }


    .menu .title {
        color: var(--text-color-light);
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        line-height: 1.6rem;
        text-decoration: none;
        cursor: pointer;
        margin: 1.2rem;
        
        &:hover {
            border-bottom: 2.5px solid #8257E6;
            filter: brightness(0.9);
        }
    }

    .nav__account {
        display: flex;
        margin: 1.5rem;

        .button {
            display: flex;
            justify-content: center;
            text-align: center;

            font-family: 'Lexend', sans-serif;
            font-weight: 400;
            font-size: 0.9rem;
            line-height: 100%;

            color: var(--text-color-light);
            background: transparent;
            border-style: none;

            border: 1.5px solid var(--title-color);
            border-radius: 0.8rem;
            padding: 0.4rem 1.2rem 0.4rem;

            text-decoration: none;

            cursor: pointer;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    .nav_mobile {
        position: fixed;
        
        left: 1rem;
        top: 1.5rem;
        right: 20rem;

        width: 5rem;

        z-index: 1;

        .button {
            background: #8257E6;
            display: flex;
            justify-content: center;
            text-align: center;

            font-family: 'Lexend', sans-serif;
            font-weight: 400;
            font-size: 0.9rem;
            line-height: 100%;

            color: var(--text-color-light);
            border-style: none;

            border: 1.5px solid var(--title-color);
            border-radius: 0.3rem;
            padding: 0.4rem 1.2rem 0.4rem;

            text-decoration: none;

            cursor: pointer;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    .menu_button {
        background: transparent;
        border: none;
        outline: none;

        position: absolute;
        top: 0;
        right: 0;

        z-index: 1;

        display: none;
        
        &:hover {
            filter: brightness(0.9);
            cursor: pointer;
            transition: 1s;
        }
    }


    @media(max-width: 968px){
        .menu_button {
            display: flex;
        }
    }

    @media(min-width: 1550px){
        display: flex;

        padding: 1rem;

        .nav__account {
            margin-left: 4rem;
        }
    }

    @media(max-width: 968px){
        .menu {
            display: none;
        }

        .nav__account  {
            display: none;
        }
    }
`;
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const slide = keyframes`
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;

    animation: ${slide} 0.6s forwards ease;

    transform: translateX(-10rem);
    opacity: 0;

    .container__title {
        .title {
            font-family: 'Lexend', sans-serif;
            color: var(--text-color-light);
            max-width: 18rem;
            line-height: 3.7rem;
            font-weight: 400;
            font-size: 2.7rem;
        }

        .description {
            display: flex;
            margin-top: 0.5rem;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            max-width: 27rem;
            line-height: 2rem;
            font-size: 1.1rem;
            color: var(--text-gray-color);
        }

        .button {
            display: flex;
            justify-content: center;
            cursor: pointer;
            padding: 1rem;
            color: var(--text-color-light);
            text-decoration: none;
            font-family: 'Lexend', sans-serif;
            font-size: 1rem;
            width: 9rem;
            height: 3rem;
            margin-top: 1rem;
            background: #8257E6;
            border-radius: 0.3rem;

            &:hover {
                filter: brightness(0.9);
            }
        }
    }

    .container__logo {
        display: flex;
        justify-content: center;
        align-items: center;

        .grid_logo {
            max-width: 33rem;
        }
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 2rem;

        .container__logo {
            margin-top: 3rem;

            .grid_logo {
                width: 20rem;
            }
        };
    };
`;
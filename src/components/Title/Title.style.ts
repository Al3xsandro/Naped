import styled, { keyframes } from 'styled-components';

const slide = keyframes`
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Container = styled.div`
    display: flex;
    padding: 3rem 3rem 2rem;

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
    }

    @media(max-width: 768px){
        display: flex;

        .container__title {
            .title {
                font-size: 2rem;
                line-height: 2.9rem;
            }
        }
    }
`;
import styled, { keyframes } from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const showForm = keyframes`
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    background: #1f2029;
    border-radius: 0.4rem;
    
    opacity: 0;

    animation: ${showForm} 0.3s forwards ease;
    transform: translateX(-8rem);

    margin: 0 auto;

    padding: 2rem;

    width: 21rem;
    max-height: 30rem;

    margin-top: 1rem;
    
    color: var(--text-color-light);

    .form__title {
        font-family: 'Lexend', sans-serif;
        text-align: center;
        font-size: 1.5rem;
        color: var(--text-color-light);
        font-weight: 600;
    }

    label {
        display: flex;
        flex-direction: column;

        margin-top: 1.5rem;

        span {
            font-size: 1rem;
            font-family: 'Lexend', sans-serif;
            font-weight: 500;
        }

        input {
            border-style: none;
            background: #181b23;
            color: var(--text-color-white);
            border-radius: 0.1rem;
            padding: 1rem;
            margin-top: 1rem;
            font-family: 'Lexend', sans-serif;
            font-weight: 400;
        }
    }

    .button {
        display: flex;
        justify-content: center;
        padding: 1rem;
        margin-top: 1.5rem;
        border-style: none;
        border-radius: 0.2rem;
        background: var(--title-color);
        color: var(--text-gray-color);
        font-family: 'Lexend', sans-serif;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media(max-width: 768px){
        display: flex;

        max-width: 20rem;
        height: 30rem;
    }
`;
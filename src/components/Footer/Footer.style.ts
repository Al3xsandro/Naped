import styled from "styled-components";

export const FooterStyle = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 2rem;

    .footer_title {
        color: var(--title-color);
        font-family: 'Lexend', sans-serif;
        font-size: 1.5rem;
        line-height: 1.9rem;
    }

    .footer_description {
        color: var(--text-gray-color);
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 500;
        max-width: 30rem;
        text-align: center;
        line-height: 1.6rem;
        text-decoration: none;
        margin: 1rem;
    }
`;
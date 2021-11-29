import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 2rem 3rem;

    .title {
        color: var(--title-color);
        font-family: 'Lexend', sans-serif;
        font-size: 1.5rem;
        line-height: 1.9rem;
    }
`;

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding: 0.5rem 3rem;

    gap: 1rem;

    .container {
        display: flex;
        flex-direction: column;
    }

    .container__image {
        display: flex;
        justify-content: center;
        flex-direction: column;

        align-items: center;

        margin: 1rem;

        .grid_logo {
            max-width: 30rem;
        }

        .description {
            font-family: Inter, sans-serif;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.5rem;
            max-width: 16rem;

            text-align: center;
            
            color: var(--text-gray-color);
        }
    }

    @media(max-width: 768px){
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

export const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;

    .container__title {
        .title {
            font-family: 'Lexend', sans-serif;
            color: var(--text-color-light);
            
            max-width: 26rem;
            line-height: 1.3;
            
            font-weight: 400;
            font-size: 2.5rem;
        }

        .description {
            display: flex;
            margin-top: 0.5rem;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            max-width: 29rem;
            line-height: 2;
            font-size: 1rem;
            color: var(--text-gray-color);
        }
    }

    .button {
        width: 9rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        cursor: pointer;
        
        padding: 1rem;
        
        color: var(--text-color-light);
        text-decoration: none;
        
        font-family: 'Lexend', sans-serif;
        font-size: 1rem;
        
        margin-top: 1.4rem;

        background: #8257E6;
        border-radius: 0.3rem;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;

        .container__title {
            .title {
                font-size: 2rem;
                line-height: 1.4;
            }
        }
    }
`;
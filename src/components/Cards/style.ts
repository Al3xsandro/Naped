import styled from "styled-components";

interface IProps {
    thumbnail: string;
};

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: ${(props: IProps) => `url(${props.thumbnail}) center`};
    object-fit: cover;
    
    height: 15rem;
    max-width: 27rem;

    padding: 0.6rem;

    transition: 0.3s ease;
    
    cursor: pointer;

    .category {
        display: flex;
        justify-content: center;
        
        width: 5rem;
        height: 2rem;

        align-items: center;

        border-radius: 0.3rem;

        background: var(--title-color);
    }

    .text {
        text-align: center;

        color: var(--white-color);

        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .description {
        text-align: left;

        color: var(--white-color);

        font-family: 'Lexend Deca', sans-serif;
        font-weight: 500;
        font-size: 1.5rem;

        line-height: 2rem;

        padding: 1.5rem;
    }

    &:hover {
        transition: 0.3s ease;
        transform: scale(1.01);
    }

    @media screen and (max-width: 1140px) {
        height: 15rem;
        width: 25rem;
    }
`;
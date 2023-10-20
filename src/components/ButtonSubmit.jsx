import styled from "styled-components";

export const ButtonSubmit = styled.button`
    letter-spacing: 0.15rem;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: hsl(25, 97%, 53%);
    margin-top: 2rem;
    color: white;
    width: 100%;
    border: none;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        color: hsl(25, 97%, 53%);
        background-color: white;
    }

    @media (max-width: 580px) {
        font-weight: 400;
        font-size: 0.8rem;
        padding: 0.7rem 1rem;

    }
`;

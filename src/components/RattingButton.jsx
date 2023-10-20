import styled from "styled-components";

export const RattingButton = styled.button`
    font-size: 1.1rem;
    font-weight: 700;
    color: hsl(216, 12%, 54%);
    width: 4rem;
    height: 4rem;
    border: none;
    border-radius: 50%;
    background-color: #2b353f;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: hsl(216, 12%, 54%);
    }

    &:focus {
        color: white;
        background-color: hsl(25, 97%, 53%);
    }

    @media (max-width: 580px) {
        width: 2.2rem;
        height: 2.2rem;
        font-size: .8rem;
    }
`;

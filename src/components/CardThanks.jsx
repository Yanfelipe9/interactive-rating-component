import styled from "styled-components";

export const CardThanks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.2rem;

    width: 30.5rem;
    height: 29rem;
    border-radius: 2rem;
    background-color: hsl(213, 19%, 18%);

    @media (max-width:580px) {
        padding: 1.2rem;

        width: 80%;
        height: auto;
    }
`;
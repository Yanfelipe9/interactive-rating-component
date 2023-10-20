import styled from "styled-components";

const StyledStar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    margin-bottom: 2rem;
    border: none;
    border-radius: 50%;
    background-color: #2b353f;

    @media (max-width: 580px) {
        width: 2.2rem;
        height: 2.2rem;
    }
`;

export const Star = () => {
    return (
    <StyledStar>
        <img  src="/icon-star.svg" alt="icon-star" />
    </StyledStar>
    );
};

export default Star;

import styled from "styled-components";

const StyledImg = styled.div`
    margin-top: 1rem;

    @media (max-width: 580px) {
        img {
            width: 8rem;
            
        }
    }
`;

const ThanksImg = () => {
    return (
        <StyledImg>
            <img src="/illustration-thank-you.svg" alt="img" />
        </StyledImg>
    );
};

export default ThanksImg;

import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  background-color: var(--tertiary-color);
  padding-top: 5rem;
  max-height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`;

export const HeroImageContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 100%;
  } ;
`;

export const HeroImage = styled.img`
  min-width: 300px;
  max-width: 400px;
  object-fit: cover;
  z-index: 10;
  animation: rotation 20s linear infinite forwards;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

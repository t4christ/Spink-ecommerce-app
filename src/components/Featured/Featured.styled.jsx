import styled from "styled-components";

export const FeaturedContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FeaturedContent = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

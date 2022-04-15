import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  min-width: 300px;
  min-height: 400px;
  overflow: hidden;
  flex-flow: column;
  gap: 1rem;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  gap: 0.5rem;
  flex: 1;
`;

export const ItemCardImageContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  justify-content: center;
  align-content: center;
  background-color: #f5f5f5;
  width: 100%;
`;

export const ItemImage = styled.img`
  width: 90%;
  height: 350px;
  /* object-fit: cover; */
`;

export const ItemName = styled.h4`
  font-weight: 400;
  font-size: 16px;
  color: black;
  text-align: center;
`;

export const ItemPrice = styled.h4`
  font-weight: 300;
  font-size: 14px;
  text-align: center;
`;

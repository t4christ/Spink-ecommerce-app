import React from "react";
import { SectionHeader, Container } from "../../GlobalStyles/GlobalStyles";
import ItemCard from "../ItemCard/ItemCard";
import { FeaturedContainer, FeaturedContent } from "./Featured.styled";

const Featured = () => {
  return (
    <FeaturedContainer>
      <SectionHeader>Featured Products</SectionHeader>
      <Container>
        <FeaturedContent>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </FeaturedContent>
      </Container>
    </FeaturedContainer>
  );
};

export default Featured;

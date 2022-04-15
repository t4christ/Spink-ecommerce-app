import React from "react";
import { HeroContainer, HeroImageContainer, HeroImage } from "./Hero.styled";
import HeroImg from "../../assets/Images/Headphones/headphone19.png";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImageContainer>
        <HeroImage src={HeroImg} />
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default Hero;

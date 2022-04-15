import React, { useState } from "react";
import {
  NavContainer,
  Logo,
  NavLinksContainer,
  NavLinks,
  ShoppingBag,
  MenuIconOne,
  MenuIconTwo,
  NavContents,
  MenuContainer,
  CartSection,
} from "./Nav.styled";
import { Container } from "../../GlobalStyles/GlobalStyles";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <NavContainer>
      <Container>
        <NavContents>
          <Logo href="#home">Spink</Logo>
          <NavLinksContainer style={!menu ? null : { top: "-1rem" }}>
            <NavLinks href="#home">Home</NavLinks>
            <NavLinks href="#gadgets">Gadgets</NavLinks>
            <NavLinks href="#about">About</NavLinks>
            <NavLinks href="#contact">Contact</NavLinks>
          </NavLinksContainer>
          <CartSection>
            <NavLinks href="#cart">
              <ShoppingBag />
              Cart <span>(0)</span>
            </NavLinks>
          </CartSection>
          <MenuContainer>
            {!menu ? (
              <MenuIconTwo
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            ) : (
              <MenuIconOne
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            )}
          </MenuContainer>
        </NavContents>
      </Container>
    </NavContainer>
  );
};

export default Nav;

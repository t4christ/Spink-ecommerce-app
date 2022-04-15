import React from "react";
import headphone1 from "../../assets/Images/Headphones/headphone1.png";
import {
  Card,
  CardDetails,
  ItemName,
  ItemPrice,
  ItemCardImageContainer,
  ItemImage,
} from "./ItemCard.styled";

const ItemCard = () => {
  return (
    <Card>
      <ItemCardImageContainer>
        <ItemImage src={headphone1} />
      </ItemCardImageContainer>
      <CardDetails>
        <ItemName>Beats "b" Dre</ItemName>
        <ItemPrice>$14 000</ItemPrice>
      </CardDetails>
    </Card>
  );
};

export default ItemCard;

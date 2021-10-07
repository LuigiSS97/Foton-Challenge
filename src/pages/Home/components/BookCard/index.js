import React from "react";
import {
  BookCover,
  Card,
  CardSubTitle,
  CardTitle,
  CardTitleWrapper,
} from "./style";

export default function BookCard({ card, onClick, index }) {
  const cardTitle = card.volumeInfo.title.split(" ", 2).join(" ");
  const cardSubtitle = card.volumeInfo.title.split(" ").splice(2).join(" ");

  function handleClickCard(card) {
    onClick(card);
  }

  return (
    <Card
      onClick={() => handleClickCard(card)}
      isPurple={index % 2 === 0 ? true : false}
    >
      <CardTitleWrapper>
        <CardTitle>{cardTitle}</CardTitle>
        <CardSubTitle>{cardSubtitle}</CardSubTitle>
      </CardTitleWrapper>
      <BookCover src={card.urlCover} />
    </Card>
  );
}

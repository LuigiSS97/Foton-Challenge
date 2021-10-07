import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { bookApi } from "../../services/api";
import { TitleWrapper } from "../Home/style";
import {
  ArrowIcon,
  Container,
  ContentContainer,
  ContentWrapper,
  CoverImg,
  CoverWrapper,
  Description,
  Header,
  IconWrapper,
  Subtitle,
  Title,
} from "./style";

const coverUrl =
  "https://www.readings.com.pk/Pages/Categories/BookImages/9781408855713.jpg";

export default function BookDetail() {
  const { bookId } = useParams();
  const history = useHistory();
  const [book, setBook] = useState([]);

  const cardTitle = book?.volumeInfo?.title.split(" ", 2).join(" ");
  const cardSubtitle = book?.volumeInfo?.title.split(" ").splice(2).join(" ");

  console.log(book);
  useEffect(() => {
    getBookById();
  }, []);

  async function getBookById() {
    try {
      await bookApi
        .get(`/books/v1/volumes?q=${bookId}`)
        .then((response) => setBook(response.data.items[0]));
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }

  return (
    <Container>
      <ContentContainer>
        <Header>
          <IconWrapper>
            <ArrowIcon size="20px" onClick={() => history.push("/")} />
          </IconWrapper>
          <CoverWrapper>
            <CoverImg src={coverUrl} />
          </CoverWrapper>
        </Header>

        <ContentWrapper>
          <TitleWrapper>
            <Title>
              {cardTitle}:<Subtitle>{cardSubtitle}</Subtitle>
            </Title>
          </TitleWrapper>
          <Description>
            {book.volumeInfo.description}
          </Description>
        </ContentWrapper>
      </ContentContainer>
    </Container>
  );
}

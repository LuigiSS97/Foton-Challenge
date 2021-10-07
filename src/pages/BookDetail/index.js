import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { bookApi } from "../../services/api";
import { TitleWrapper } from "../Home/style";
import CircularProgress from "@material-ui/core/CircularProgress";
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
  SpinnerContainer,
  Subtitle,
  Title,
} from "./style";

const coverUrl =
  "https://www.readings.com.pk/Pages/Categories/BookImages/9781408855713.jpg";

export default function BookDetail() {
  const [loading, setLoading] = useState(true);
  const { bookId } = useParams();
  const history = useHistory();
  const [book, setBook] = useState([]);

  const cardTitle = book?.volumeInfo?.title.split(" ", 2).join(" ");
  const cardSubtitle = book?.volumeInfo?.title.split(" ").splice(2).join(" ");

  useEffect(() => {
    getBookById();
  }, []);

  async function getBookById() {
    try {
      await bookApi
        .get(`/books/v1/volumes?q=${bookId}`)
        .then((response) => setBook(response.data.items[0]));

      setLoading(false);
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
  if (loading) {
    return (
      <SpinnerContainer>
        <CircularProgress />
      </SpinnerContainer>
    );
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
            {book.volumeInfo.description ? (book.volumeInfo.description): "Não há descrição do livro"}
          </Description>
        </ContentWrapper>
      </ContentContainer>
    </Container>
  );
}

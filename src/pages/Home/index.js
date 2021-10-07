import React, { useEffect, useState } from "react";
import { bookApi } from "../../services/api";
import { AiOutlineSearch } from "react-icons/ai";
import {
  BookCardContainer,
  Container,
  ContentContainer,
  ContentWrapper,
  Header,
  SearchInput,
  Subtitle,
  SubtitleWrapper,
  Title,
  TitleWrapper,
  User,
  ViewAllButton,
} from "./style";
import { Snackbar } from "@material-ui/core";
import BookCard from "./components/BookCard";
import Main from "../../components/Layout";
import { useHistory } from "react-router";

const coverUrl =
  "https://www.readings.com.pk/Pages/Categories/BookImages/9781408855713.jpg";

export default function Home() {
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [scroolableBooks, setScroolableBooks] = useState(false);
  const [searchQuery, setSearchQuery] = useState("harry potter");

  useEffect(() => {
    setBooksData();
  }, []);

  async function setBooksData() {
    try {
      const bookResponse = await bookApi.get(
        `/books/v1/volumes?q=${searchQuery}`
      );
      const finalData = insertUrlImage(bookResponse.data.items);

      setBooks(finalData);
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  function handleClickCard(card) {
    history.push(`/livro/${card.id}`);
  }

  function insertUrlImage(bookData) {
    const data = bookData.map((item) => ({ ...item, urlCover: coverUrl }));
    return data;
  }

  return (
    <Container>
      <ContentContainer>
        <Main>
          <Header>
            <SearchInput icon={<AiOutlineSearch size="15px" />} />
          </Header>

          <TitleWrapper>
            <Title>Hi,</Title>
            <User>Mehmed Al Fatih 👋</User>
          </TitleWrapper>

          <ContentWrapper>
            <SubtitleWrapper>
              <Subtitle> Discover new book </Subtitle>
              <ViewAllButton
                onClick={() => setScroolableBooks(!scroolableBooks)}
              >
                {scroolableBooks ? "Less" : "More"}
              </ViewAllButton>
            </SubtitleWrapper>
            <BookCardContainer scroolableBooks={scroolableBooks}>
              {books?.map((book, index) => (
                <BookCard
                  key={book.id}
                  card={book}
                  index={index}
                  onClick={handleClickCard}
                />
              ))}
            </BookCardContainer>
          </ContentWrapper>
          <ContentWrapper>
            <SubtitleWrapper>
              <Subtitle> Currently Reading </Subtitle>
              <ViewAllButton>All</ViewAllButton>
            </SubtitleWrapper>
          </ContentWrapper>
        </Main>
      </ContentContainer>
      {error && (
        <Snackbar open={true} autoHideDuration={3000} message={error} />
      )}
    </Container>
  );
}

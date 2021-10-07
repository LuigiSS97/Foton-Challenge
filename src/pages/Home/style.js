import styled from "styled-components";
import Input from "../../components/Input";

import Oval2 from "../../assets/Oval2.png";
import Oval3 from "../../assets/Oval3.png";

export const Container = styled.body`
  max-width: 375px;
  width: 100%;
  padding: 20px;
  height: 100%;
  background: url(${Oval3}) no-repeat 100% bottom;

`;

export const Header = styled.div`
  width: 100%;
`;

export const SearchInput = styled(Input)`
  width: 100%;
  background: #fdfcfc;
  border-radius: 10px;
  border: none !important;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 30px 0;
  justify-content: flex-start;
`;

export const Title = styled.p`
  color: #54565a;
  font-size: 1.5rem;
`;

export const User = styled.p`
  color: #fe6a78;
  font-size: 1.5rem;
  display: flex;
  font-weight: bold;
`;

export const ContentWrapper = styled.div``;

export const SubtitleWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const Subtitle = styled.p`
  color: #3f4043;
  font-size: 1.2rem;
  width: 100%;
  `;

export const ViewAllButton = styled.p`
background-color: none;
border: none;
color: #4ABDF1;
cursor: pointer;
`;

export const BookCardContainer = styled.div`
  padding-top: 15px;
  display: flex;
  width: 100%;
  position: fixed;
  justify-content: space-between;
  overflow-x: ${({scroolableBooks}) => (scroolableBooks ? "auto" : "hidden")};

  
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BookCard = styled.div`
  width: 100%;
  max-width: 272px;
  height: 139px;
  background-color: #00173d;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background: #00173d url(${Oval2}) no-repeat 0% bottom;

  :hover{
    background: #002663;
    transition: all 0.5s;
  }
`;

export const CardTitleWrapper = styled.div`
  width: calc(60% - 5px);
`;

export const CardTitle = styled.p`
font-size: 1.5rem;
color: #FEFEFE;
word-wrap: normal;
font-family: Playfair Display;
font-weight: bold;
`;
export const CardSubTitle = styled.p`
font-size: 0.8rem;
color: #FEFEFE;
word-wrap: normal;
`;

export const BookCover = styled.img`
  width: 40%;
  height: 100%;
  border-radius: 4px;
`;

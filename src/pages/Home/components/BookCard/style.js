import styled from "styled-components";

import Oval2 from "../../../../assets/Oval2.png";

export const Card = styled.div`
  margin: 0 5px;
  width: 100%;
  min-width: 272px;
  height: 139px;
  background-color: #00173d;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background: ${({isPurple}) => (isPurple ? "#451475" : "#00173d")} url(${Oval2}) no-repeat 0% bottom;

  :hover {
    background: #002663;
    transition: all 0.5s;
  }
`;

export const CardTitleWrapper = styled.div`
  width: calc(60% - 5px);
`;

export const CardTitle = styled.p`
  font-size: 1.5rem;
  color: #fefefe;
  word-wrap: normal;
  font-family: Playfair Display;
  font-weight: bold;
`;
export const CardSubTitle = styled.p`
  font-size: 0.8rem;
  color: #fefefe;
  word-wrap: normal;
`;

export const BookCover = styled.img`
  width: 40%;
  height: 100%;
  border-radius: 4px;
`;

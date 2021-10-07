import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  max-width: 375px;
  width: 100%;
  height: 100%;
  max-height: 812px;
`;

export const Header = styled.div`
  height: 40%;
  background: #fff6e5;
  border-radius: 0 0 106px 0px;
  width: 100%;

`;

export const IconWrapper = styled.div`
  width: 100%;
  justify-content: flex-start;
  padding: 20px;
`;

export const CoverWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 150px;
  max-height: 200px;
`;

export const ArrowIcon = styled(AiOutlineArrowLeft)``;

export const ContentWrapper = styled.div`
  height: 60%;
  width: 100%;
  padding: 20px;
`;

export const TitleWrapper = styled.div`
  padding: 0 32px;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: rgba(49, 49, 49, 0.6);
  font-family: SFProText;
  word-spacing: 5px;
  word-wrap: break-word;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
`;

import styled from "styled-components";
import { RiBookLine } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

export const Container = styled.div``;

export const BottomBar = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
  border-radius: 2px;
  height: 59px;
  padding: 10px;
  position: relative;
  bottom: -30vh;
`;

export const BarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BarButton = styled.div`
  width: 33.3%;
  height: 100%;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
    cursor: pointer;
  :hover {
    opacity: 0.8;

  }
`;

export const HomeIcon = styled(BiHomeAlt)``;

export const LibIcon = styled(RiBookLine)``;

export const ProfileIcon = styled(AiOutlineUser)``;

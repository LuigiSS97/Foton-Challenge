import React from "react";
import { useHistory } from "react-router";

import {
  BarButton,
  BarContainer,
  BottomBar,
  Container,
  HomeIcon,
  LibIcon,
  ProfileIcon,
} from "./style";

export default function Main({ children }) {
  const history = useHistory()

  return (
    <Container>
      {children}
      <BottomBar>
        <BarContainer>
          <BarButton onClick={() => history.push("/")}>
            <HomeIcon size="20px" />
            Home
          </BarButton>
          <BarButton>
            <LibIcon size="20px" />
            Libraries
          </BarButton>
          <BarButton>
            <ProfileIcon size="20px" />
            Profile
          </BarButton>
        </BarContainer>
      </BottomBar>
    </Container>
  );
}

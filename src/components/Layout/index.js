import React from "react";

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
  return (
    <Container>
      {children}
      <BottomBar>
        <BarContainer>
          <BarButton>
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

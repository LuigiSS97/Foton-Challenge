import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
        background-color: #fffcf9 ;
        --webkit-font-smooth: antialiased;
        max-width: 375px;
  }
  html {
      
      div,input,textarea,button,p {
          @media (max-width: 720px) {
          font-size: 0.75rem;          
        }
        font: 400 1rem "SFProDisplay", sans-serif;
      }

      button {
          cursor: pointer;
          text-decoration: none;
      }
  }
`;
export default GlobalStyle;

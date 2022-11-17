import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #e0e0e0;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on Hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  * {
    box-sizing: border-box;
    /* font-family: "Open Sans", sans-serif; */
    /* font-family: 'Over the Rainbow', cursive; */
    font-family: "Noto Serif", serif;
  }
`;

export default GlobalStyles;

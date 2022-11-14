import "@src/styles/globals.css";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    lagunaBeach: "#E9D5C1",
    sunsetOrange: "#FF4848",
    dimGray: "#646464",
    novel: "#9C9A9A",
    darkLiver: "#4A4041",
    cultured: "#F4F4F4",
    tutu: "#FFE6E6",
    veryLightGrey: "#CECDCD",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

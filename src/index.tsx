import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./components/App";
import theme from "./theme";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOMClient.createRoot(rootElement);

const GlobalStyle = createGlobalStyle`
  :root {
    --breakpoint-mobile: ${theme.breakpoints.mobile};
    --breakpoint-desktop: ${theme.breakpoints.desktop};
    --white: ${theme.colors.neutral.white};
    --veryDarkBlue-mainbg: ${theme.colors.neutral.veryDarkBlue.mainBg};
    --veryDarkBlue-cardbg: ${theme.colors.neutral.veryDarkBlue.cardBg};
    --veryDarkBlue-line: ${theme.colors.neutral.veryDarkBlue.line};
    --cyan: ${theme.colors.primary.cyan};
    --softBlue: ${theme.colors.primary.softBlue};
    --fontFamily: ${theme.typography.font.fontFamily};
    --fs-body: ${theme.typography.bodyCopy.fontSize};
    --fw-thin: ${theme.typography.font.weights.thin};
    --fw-regular: ${theme.typography.font.weights.regular};
    --fw-bold: ${theme.typography.font.weights.bold};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--fontFamily);
  }
  body {
    font-size: var(--fs-body);
  }
`;

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);

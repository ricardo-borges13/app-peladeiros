import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import { GlobalStyle } from "./assets/styles/global";


import { MatchInProgress } from "./pages/MatchInProgress/MatchInProgress";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <MatchInProgress />
    </ThemeProvider>
  );
}

export default App;

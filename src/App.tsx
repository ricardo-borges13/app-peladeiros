import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import { GlobalStyle } from "./assets/styles/global";


import { NewMatch } from "./pages/NewMatch/NewMatch";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <NewMatch />
    </ThemeProvider>
  );
}

export default App;

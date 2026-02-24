import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import { GlobalStyle } from "./assets/styles/global";


import { NovaPartida } from "./pages/NovaPartida/NovaPartida";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <NovaPartida />
    </ThemeProvider>
  );
}

export default App;

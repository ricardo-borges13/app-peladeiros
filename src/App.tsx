import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Button } from "./components/Button/Buton";
import { GlobalStyle } from "./assets/styles/global";
import { LayoutContainer } from "./components/LayoutContainer/LayoutContainer.sytles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <LayoutContainer>
        <Button color="success" size="lg">
          Iniciar Partida
        </Button>

        <Button as="a" href="/historico" variant="outline">
          Ver Histórico
        </Button>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;

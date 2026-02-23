import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Button } from "./components/Button/Buton";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="success" size="lg">
        Iniciar Partida
      </Button>

      <Button as="a" href="/historico" variant="outline">
        Ver Histórico
      </Button>

      <Button color="whatsapp" isLoading>
        Enviando...
      </Button>

      <Button color="danger" variant="ghost">
        Remover
      </Button>
    </ThemeProvider>
  );
}

export default App;

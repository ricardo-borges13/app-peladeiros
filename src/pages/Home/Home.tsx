import { LayoutContainer } from "../../components/LayoutContainer/LayoutContainer.sytles";
import { Button } from "../../components/Button/Buton";
import {
  Container,
  Title,
  ButtonsWrapper,
  PrimaryActionWrapper,
} from "./Home.styles";

// Se você já usa algum lib de ícones, pode trocar esses placeholders depois
// Ex: react-icons, lucide, etc.
function PlayIcon() {
  return <span>▶️</span>;
}

function UserIcon() {
  return <span>🏃</span>;
}

function HistoryIcon() {
  return <span>📜</span>;
}

function SyncIcon() {
  return <span>🔄</span>;
}

export const Home = () => {
  return (
    <LayoutContainer>
      <Container>
        <Title>Areninha Por do Sol</Title>

        <ButtonsWrapper>
          <PrimaryActionWrapper>
            <Button color="success" size="lg" width={100} icon={<PlayIcon />}>
              Formação do Time
            </Button>
          </PrimaryActionWrapper>

          <Button color="secondary" size="md" width={90} icon={<HistoryIcon />}>
            Histórico
          </Button>

          <Button color="update" size="md" width={90} icon={<SyncIcon />}>
            Sincronizar Cadastro
          </Button>
        </ButtonsWrapper>
      </Container>
    </LayoutContainer>
  );
};

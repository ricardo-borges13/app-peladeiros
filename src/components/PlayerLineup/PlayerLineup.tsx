import { Button } from "../Button/Button";
import { Container, PlayerName } from "./PlayerLineup.styles";

type PlayerLineupProps = {
  name: string;
};

export const PlayerLineup = ({ name }: PlayerLineupProps) => {
  return (
    <Container>
      <PlayerName>{name}</PlayerName>
      <Button color="danger" size="sm" variant="ghost" >
  Remover
</Button>
    </Container>
  );
};

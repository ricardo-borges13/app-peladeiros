import { ScoreCounter } from "../ScoreCounter/ScoreCounter";
import { Container, PlayerName } from "./PlayerGoal.styles";

type PlayerGoalProps = {
  name: string;
  goals: number;
  disabled?: boolean;
  onChangeGoals: (newGoals: number) => void;
};

export const PlayerGoal = ({
  name,
  goals,
  disabled = false,
  onChangeGoals,
}: PlayerGoalProps) => {
  return (
    <Container>
      <PlayerName>{name}</PlayerName>

      <ScoreCounter value={goals} onChange={onChangeGoals} disabled={disabled} />
    </Container>
  );
};

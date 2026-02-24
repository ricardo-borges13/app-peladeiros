import { ScoreCounter } from "../ScoreCounter/ScoreCounter"
import { Container, PlayerName } from "./PlayerRow.styles"

type PlayerRowProps = {
  name: string
  goals: number
  onChangeGoals: (newGoals: number) => void
}

export const PlayerRow = ({
  name,
  goals,
  onChangeGoals,
}: PlayerRowProps) => {
  return (
    <Container>
      <PlayerName>{name}</PlayerName>
      <ScoreCounter value={goals} onChange={onChangeGoals} />
    </Container>
  )
}

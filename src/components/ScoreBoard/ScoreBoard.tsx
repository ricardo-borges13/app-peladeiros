import { Container, TeamHeader, ScoreRow, TeamName, ScoreNumber, Separator } from "./ScoreBoard.styles";

type ScoreBoardProps = {
  yellowTeamName?: string;
  blueTeamName?: string;
  yellowScore: number;
  blueScore: number;
};

export const ScoreBoard = ({
  yellowTeamName = "Time Amarelo",
  blueTeamName = "Time Azul",
  yellowScore,
  blueScore,
}: ScoreBoardProps) => {
  return (
    <Container>
      <TeamHeader>
        <TeamName $variant="yellow">{yellowTeamName}</TeamName>
        <TeamName $variant="blue">{blueTeamName}</TeamName>
      </TeamHeader>

      <ScoreRow>
        <ScoreNumber>{yellowScore}</ScoreNumber>
        <Separator>-</Separator>
        <ScoreNumber>{blueScore}</ScoreNumber>
      </ScoreRow>
    </Container>
  );
};

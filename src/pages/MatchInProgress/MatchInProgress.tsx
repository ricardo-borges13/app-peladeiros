import { LayoutContainer } from "../../components/LayoutContainer/LayoutContainer.sytles";
import { useState } from "react";
import { ScoreBoard } from "../../components/ScoreBoard/ScoreBoard";
import { PlayerGoal } from "../../components/PlayerRow/PlayerGoal";
import {
  Columns,
  Column,
  TeamTitle,
  ColumnActions,
} from "./MatchInProgress.styles";
import { Button } from "../../components/Button/Button";
import { SectionPage } from "./../../components/SectionPage/SectionPage";
import { GameTimer } from "./../../components/GameTimer/GameTimer";
import { LockToggle } from "../../components/LockToggle/LockToggle";

type Player = {
  id: string;
  name: string;
  goals: number;
};

export const MatchInProgress = () => {
  const [locked, setLocked] = useState(false);
  const [yellowTeam, setYellowTeam] = useState([
    { id: "1", name: "Cléber", goals: 0 },
    { id: "2", name: "Pity", goals: 0 },
    { id: "3", name: "Rogério", goals: 0 },
    { id: "4", name: "Gol Contra", goals: 0 },
  ]);

  const [blueTeam, setBlueTeam] = useState<Player[]>([
    { id: "b1", name: "Cristiano", goals: 0 },
    { id: "b2", name: "Ricardo ", goals: 0 },
    { id: "b3", name: "Gustavo", goals: 0 },
    { id: "4", name: "Gol Contra", goals: 0 },
  ]);

  const totalYellow = yellowTeam.reduce((sum, p) => sum + p.goals, 0);
  const totalBlue = blueTeam.reduce((sum, p) => sum + p.goals, 0);

  const updateYellowGoals = (id: string, newGoals: number) => {
    setYellowTeam((prev) =>
      prev.map((p) => (p.id === id ? { ...p, goals: newGoals } : p)),
    );
  };

  const updateBlueGoals = (id: string, newGoals: number) => {
    setBlueTeam((prev) =>
      prev.map((p) => (p.id === id ? { ...p, goals: newGoals } : p)),
    );
  };

  return (
    <LayoutContainer>
    <SectionPage
      title="Partida Veterano"
      onBack={() => window.history.back()}
      rightSlot={
    <LockToggle
      locked={locked}
      onToggle={() => setLocked((v) => !v)}
    />
  }
      footer={
          <div>
            <Button color="danger" size="md">
              Finalizar Partida
            </Button>
          </div>
        }
      >
        <ScoreBoard
          yellowTeamName="Time Amarelo"
          blueTeamName="Time Azul"
          yellowScore={totalYellow}
          blueScore={totalBlue}
        />

        <GameTimer disabled={locked} />

        <Columns>
          <Column $variant="yellow">
            <TeamTitle>Time Amarelo</TeamTitle>

            <div>
              {yellowTeam.map((player) => (
                <PlayerGoal
                  key={player.id}
                  name={player.name}
                  goals={player.goals}
                  disabled={locked}
                  onChangeGoals={(newGoals) =>
                    updateYellowGoals(player.id, newGoals)
                  }
                />
              ))}
            </div>

            <ColumnActions>
              <Button color="add" size="md" radius={2} variant="border">
                + Adicionar
              </Button>
            </ColumnActions>
          </Column>

          <Column $variant="blue">
            <TeamTitle>Time Azul</TeamTitle>

            <div>
              {blueTeam.map((player) => (
                <PlayerGoal
                  key={player.id}
                  name={player.name}
                  disabled={locked}
                  goals={player.goals}
                  onChangeGoals={(newGoals) =>
                    updateBlueGoals(player.id, newGoals)
                  }
                />
              ))}
            </div>

            <ColumnActions>
              <Button color="add" size="md" radius={2} variant="border">
                + Adicionar
              </Button>
            </ColumnActions>
          </Column>
        </Columns>
      </SectionPage>
    </LayoutContainer>
  );
};

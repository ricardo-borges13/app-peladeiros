import { LayoutContainer } from "../../components/LayoutContainer/LayoutContainer.sytles";
import { useState } from "react";
import { SegmentedControl } from "../../components/SegmentdControl/SegmentedControl";
import { ScoreCounter } from "../../components/ScoreCounter/ScoreCounter";
import { ScoreBoard } from "../../components/ScoreBoard/ScoreBoard";
import { PlayerRow } from "../../components/PlayerRow/PlayerRow";
import { Columns, Column, TeamTitle } from "./NovaPartida.styles"

type Tab = "novos" | "veteranos" | "presenca";
type Filter = "todos" | "veteranos" | "novos";

type Player = {
  id: string
  name: string
  goals: number
}

export const NovaPartida = () => {
  const [tab, setTab] = useState<Tab>("novos");
  const [filter, setFilter] = useState<Filter>("todos");

const [yellowTeam, setYellowTeam] = useState([
  { id: "1", name: "Cléber", goals: 0 },
  { id: "2", name: "Pity", goals: 0 },
  { id: "3", name: "Rogério", goals: 0 },
])

  const [blueTeam, setBlueTeam] = useState<Player[]>([
    { id: "b1", name: "Cristiano", goals: 0 },
    { id: "b2", name: "Ricardo ", goals: 0 },
    { id: "b3", name: "Gustavo", goals: 0 },
  ])

  const totalYellow = yellowTeam.reduce((sum, p) => sum + p.goals, 0)
  const totalBlue = blueTeam.reduce((sum, p) => sum + p.goals, 0)

  const updateYellowGoals = (id: string, newGoals: number) => {
    setYellowTeam((prev) =>
      prev.map((p) => (p.id === id ? { ...p, goals: newGoals } : p))
    )
  }

  const updateBlueGoals = (id: string, newGoals: number) => {
    setBlueTeam((prev) =>
      prev.map((p) => (p.id === id ? { ...p, goals: newGoals } : p))
    )
  }

  return (
    <LayoutContainer>
      <h1>Nova Partida</h1>
      <SegmentedControl
        options={[
          { label: "Novos", value: "novos" },
          { label: "Veteranos", value: "veteranos" },
          { label: "Presença", value: "presenca" },
        ]}
        value={tab}
        onChange={setTab}
        color="primary"
      />

      <br />
      <br />
      <br />
      <br />
      <br />

      <SegmentedControl
        options={[
          { label: "Todos", value: "todos" },
          { label: "Veteranos", value: "veteranos" },
          { label: "Novos", value: "novos" },
        ]}
        value={filter}
        onChange={setFilter}
        color="secondary"
      />
      <br />
      <br />
      <ScoreBoard
        yellowTeamName="Time Amarelo"
        blueTeamName="Time Azul"
        yellowScore={totalYellow}
        blueScore={totalBlue}
      />

      <Columns>
        <Column $variant="yellow">
          <TeamTitle>Time Amarelo</TeamTitle>
          {yellowTeam.map((player) => (
            <PlayerRow
              key={player.id}
              name={player.name}
              goals={player.goals}
              onChangeGoals={(newGoals) =>
                updateYellowGoals(player.id, newGoals)
              }
            />
          ))}
        </Column>

        <Column $variant="blue">
          <TeamTitle>Time Azul</TeamTitle>
          {blueTeam.map((player) => (
            <PlayerRow
              key={player.id}
              name={player.name}
              goals={player.goals}
              onChangeGoals={(newGoals) =>
                updateBlueGoals(player.id, newGoals)
              }
            />
          ))}
        </Column>
      </Columns>
    </LayoutContainer>
  );
};

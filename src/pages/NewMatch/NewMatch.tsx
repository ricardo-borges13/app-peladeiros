import { LayoutContainer } from "../../components/LayoutContainer/LayoutContainer.sytles";
import { SectionPage } from "../../components/SectionPage/SectionPage";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import { SegmentedControl } from "../../components/SegmentedControl/SegmentedControl";
import { DivTitle } from "./NewMatch.styles";
import { Columns, Column, TeamTitle, ColumnActions } from "./NewMatch.styles";
import { PlayerLineup } from "../../components/PlayerLineup/PlayerLineup";

type Tab = "novos" | "veteranos";

type Player = {
  id: string;
  name: string;
  goals: number;
};

export const NewMatch = () => {
  const [tab, setTab] = useState<Tab>("novos");

  type TeamState = {
    yellow: Player[];
    blue: Player[];
  };

  const [novosTeams, setNovosTeams] = useState<TeamState>({
    yellow: [
      { id: "1", name: "Cléber", goals: 0 },
      { id: "2", name: "Pity", goals: 0 },
      { id: "3", name: "Rogério", goals: 0 },
    ],
    blue: [
      { id: "b1", name: "Cristiano", goals: 0 },
      { id: "b2", name: "Ricardo", goals: 0 },
      { id: "b3", name: "Gustavo", goals: 0 },
    ],
  });

  const [veteranosTeams, setVeteranosTeams] = useState<TeamState>({
    yellow: [],
    blue: [],
  });

  const activeTeams = tab === "novos" ? novosTeams : veteranosTeams;
  const setActiveTeams = tab === "novos" ? setNovosTeams : setVeteranosTeams;

  return (
    <LayoutContainer>
      <SectionPage
        title="Formação dos Times"
        onBack={() => window.history.back()}
        footer={
          <div>
            <Button color="primary" size="md">
              Iniciar Partida
            </Button>
          </div>
        }
      >
        <SegmentedControl
          options={[
            { label: "Novos", value: "novos" },
            { label: "Veteranos", value: "veteranos" },
          ]}
          value={tab}
          onChange={setTab}
          color="secondary"
        />
        <DivTitle>
          <h3>{tab === "novos" ? "Novos" : "Veteranos"}</h3>
        </DivTitle>

        <Columns>
          <Column $variant="yellow">
            <TeamTitle>Time Amarelo</TeamTitle>

            <div>
              {activeTeams.yellow.map((player) => (
                <PlayerLineup key={player.id} name={player.name} />
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
              {activeTeams.blue.map((player) => (
                <PlayerLineup key={player.id} name={player.name} />
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

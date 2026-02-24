import { LayoutContainer } from "../../components/LayoutContainer/LayoutContainer.sytles";
import { useState } from 'react'
import { SegmentedControl } from "../../components/SegmentdControl/SegmentedControl";


type Tab = 'novos' | 'veteranos' | 'presenca'
type Filter = 'todos' | 'veteranos' | 'novos'

export const NovaPartida = () => {
   const [tab, setTab] = useState<Tab>('novos')
   const [filter, setFilter] = useState<Filter>('todos')


  return (
    <LayoutContainer>
      <h1>Nova Partida</h1>
      <SegmentedControl
      options={[
        { label: 'Novos', value: 'novos' },
        { label: 'Veteranos', value: 'veteranos' },
        { label: 'Presença', value: 'presenca' },
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
        { label: 'Todos', value: 'todos' },
        { label: 'Veteranos', value: 'veteranos' },
        { label: 'Novos', value: 'novos' },
      ]}
      value={filter}
      onChange={setFilter}
      color="secondary"
    />

    </LayoutContainer>
  );
};


# ⚛️ React + TypeScript + Vite + PWA

Aplicação desenvolvida com React, TypeScript e Vite, configurada como **Progressive Web App (PWA)** para permitir instalação no celular e melhor desempenho.

---

## 🚀 Tecnologias Utilizadas

- **Framework:** React
- **Linguagem:** TypeScript
- **Build Tool:** Vite
- **PWA:** vite-plugin-pwa
- **Roteamento:** React Router
- **Estilização:** Styled Components / Bootstrap
- **Linting:** ESLint
- **Gerenciador de Pacotes:** npm

---

## 🛠️ Setup Inicial

**Pré-requisitos**
- Node.js 18+
- npm

**Instalar dependências**

```bash
npm install
```

## ▶️ Como Rodar o Projeto

**Modo desenvolvimento**

```bash
npm run dev
```

**Build de produção**

```bash
npm run build
```

**Visualizar build localmente**

```bash
npm run preview
```

---

## 📱 PWA (Progressive Web App)

O projeto está configurado como Progressive Web App, permitindo instalação no celular como um app nativo.

**Plugin utilizado:** `vite-plugin-pwa`

```bash
npm install vite-plugin-pwa -D
```

### Configuração no Arquivo `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Areninha Por do Sol',
        short_name: 'Areninha',
        description: 'Controle de pelada - Areninha Por do Sol',
        theme_color: '#2e7d32',
        background_color: '#2e7d32',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
```

### Assets Necessários

Adicionar as imagens na pasta `public/`:

```
public/
├── pwa-192x192.png
└── pwa-512x512.png
```

> O ícone `512x512` é declarado duas vezes: uma como ícone padrão (`any`) e outra como `maskable`, garantindo compatibilidade com ícones adaptativos no Android.

---

## ⚽ Areninha Por do Sol

Aplicativo PWA para controle das peladas de final de semana da **Areninha Por do Sol**.
Permite gerenciar times, gols, presenças e rankings dos jogadores ao longo do ano.

### 📋 Sobre o Projeto

O app organiza duas peladas separadas — `Novos` e `Veteranos` — com pontuações independentes.
Ao final do ano, é possível acompanhar o artilheiro geral e o jogador com maior pontuação acumulada.

### 🧮 Sistema de Pontuação

| Resultado | Pontos |
|-----------|--------|
| Vitória   | 3 pts  |
| Empate    | 1 pt   |
| Derrota   | 0 pts  |
| Presença (sem jogar) | 1 pt |
| Gol marcado | contabilizado para artilharia |

### ✅ Funcionalidades Previstas

- Registro de participantes por pelada (Novos / Veteranos)
- Formação dos times
- Marcação de gols por atleta
- Controle de presença (jogou / não jogou mas foi)
- Artilheiro da semana e artilheiro geral
- Ranking de pontuação geral ao final do ano
- Histórico de partidas


## 🧱 Componente Button

O projeto possui um **componente de botão reutilizável** baseado em `styled-components` e integrado ao `theme`.
Ele foi pensado para atender todas as variações visuais e funcionais do app com **um único componente**.

### ✅ Recursos disponíveis

- **Variantes visuais (`variant`)**
  - `solid` (padrão): botão preenchido
  - `outline`: botão apenas com borda (sem fundo)
  - `ghost`: botão sem fundo e sem borda (ideal para ações como “Remover”)

- **Cores (`color`)**
  - `primary`
  - `secondary`
  - `success`
  - `danger`
  - `warning`
  - `whatsapp`

- **Tamanhos (`size`)**
  - `sm` (pequeno)
  - `md` (médio, padrão)
  - `lg` (grande)

- **Arredondamento (`radius`)**
  - Permite definir o `border-radius` do botão via número (em pixels)

- **Largura total (`fullWidth`)**
  - Quando `true`, o botão ocupa 100% da largura do container

- **Ícone opcional (`icon`)**
  - Permite renderizar um ícone antes do texto do botão

- **Estado de carregamento (`isLoading`)**
  - Desabilita o botão
  - Exibe um spinner no lugar do conteúdo
  - Evita múltiplos cliques durante ações assíncronas

- **Polimórfico com `as`**
  - Permite renderizar o botão como outro elemento HTML (ex: `<a>`)
  - Útil para links com aparência de botão

- **Suporte a eventos nativos**
  - Aceita `onClick`, `disabled` e demais props HTML básicas

---

### 🧩 Exemplos de uso

#### Botão principal

```tsx
<Button color="success" size="lg">
  Iniciar Partida
</Button>


## 🧱 LayoutContainer

O projeto utiliza um **LayoutContainer** como base de layout para todas as páginas da aplicação.
Ele é um **styled-component reutilizável** responsável por padronizar o espaçamento, largura e organização das telas, evitando repetição de CSS em cada página.

### 🎯 Objetivos

- Centralizar o conteúdo da aplicação
- Definir uma largura máxima adequada para mobile
- Padronizar o `padding` interno das páginas
- Garantir consistência visual entre todas as telas
- Facilitar manutenção (mudanças de layout em um único lugar)

---

### 📁 Local do arquivo

src/components/LayoutContainer/LayoutContainer.styles.ts


---

### 🧩 Implementação

O `LayoutContainer` é apenas um styled-component (não possui lógica React), servindo como um **wrapper de layout** para cada página:

```ts
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 430px; /* Teto para celulares grandes */
  margin: 0 auto;
  padding: 16px;

  display: flex;
  flex-direction: column;

  /* Ajustes para telas um pouco maiores */
  @media (min-width: 390px) {
    padding: 20px;
  }

  @media (min-width: 430px) {
    padding: 24px;
  }
`
```
***Exemplo de Uso em uma página***
```tsx
import { LayoutContainer } from '../components/LayoutContainer/LayoutContainer.styles'

export function Home() {
  return (
    <LayoutContainer>
      <h1>Areninha</h1>
      {/* Conteúdo da página */}
    </LayoutContainer>
  )
}
```
***Conceito de Design***
- O layout é mobile-first, pensado inicialmente para telas em torno de 360px
**Breakpoints principais considerados:**
- 360px → celulares menores (base do layout)
- 390px → celulares médios
- 430px → celulares grandes (iPhone Pro Max, etc)

- Em telas maiores, o conteúdo é centralizado e não se estica demais, mantendo boa legibilidade e usabilidade

***Benefícios***
- Evita duplicação de CSS entre páginas
- Garante consistência de layout em todo o app
- Facilita ajustes globais de espaçamento e largura
- Serve como base estrutural para todas as telas do PWA

----

## 🧩 Componente SegmentedControl

O **SegmentedControl** é um componente reutilizável para seleção de opções em formato de botões segmentados (ex: *Novos / Veteranos / Presença* ou *Todos / Veteranos / Novos*).
Ele é **controlado** (o estado fica na página) e aceita **configuração de cor** para o item ativo.

---

### 🎯 Objetivos

- Reutilizar o mesmo componente em múltiplas telas
- Evitar duplicação de lógica e estilos
- Fornecer uma UI simples e clara para filtros/abas
- Manter consistência visual no app

---

### 📁 Estrutura de arquivos
src/components/SegmentedControl/
SegmentedControl.tsx
SegmentedControl.styles.ts


---

### 🧠 Conceito

- O componente recebe:
  - `options`: lista de opções (label + value)
  - `value`: valor atualmente selecionado
  - `onChange`: callback chamado ao trocar a opção
  - `color`: cor do item ativo (`primary` ou `secondary`)
- O estado **não** fica dentro do componente.
- A página é responsável por controlar o valor selecionado.

---

### 🧩 API (Props)

```ts
type SegmentedOption<T extends string = string> = {
  label: ReactNode
  value: T
}

type SegmentedControlProps<T extends string = string> = {
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  color?: 'primary' | 'secondary'
  fullWidth?: boolean
}
```

- options (obrigatório): opções exibidas
- value (obrigatório): valor selecionado
- onChange (obrigatório): função chamada ao clicar em uma opção
- color (opcional): define a cor do item ativo (primary ou secondary). Padrão: primary
- fullWidth (opcional): se true, ocupa 100% da largura. Padrão: true

### Exemplo de tela

```tsx
import { useState } from 'react'
import { SegmentedControl } from '@/components/SegmentedControl/SegmentedControl'

type Tab = 'novos' | 'veteranos' | 'presenca'

export const ExemploAbas = () => {
  const [tab, setTab] = useState<Tab>('novos')

  return (
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
  )
}

```
-----------

## ⚽ Componente ScoreCounter

O **ScoreCounter** é um componente reutilizável para **contagem de gols** (ou qualquer valor numérico) usando botões de **incremento (+)** e **decremento (–)**.
Ele é um componente **controlado**: o estado fica na página e é passado via props.

---

### 🎯 Objetivos

- Permitir incrementar e decrementar um valor numérico
- Impedir valores **menores que o mínimo** (padrão: 0)
- Impedir valores **maiores que o máximo** (padrão: 20)
- Exibir um **placeholder** (ex: `"Gol"`) quando o valor for 0
- Proteger o layout de números exagerados (UI safeguard)

---

### 📁 Estrutura de arquivos
src/components/ScoreCounter/
ScoreCounter.tsx
ScoreCounter.styles.ts



---

### 🧠 Conceito

- O componente recebe:
  - `value`: valor atual
  - `onChange`: função para atualizar o valor
  - `min`: valor mínimo permitido (padrão: `0`)
  - `max`: valor máximo permitido (padrão: `20`)
  - `placeholder`: texto exibido quando `value === 0` (padrão: `"Gol"`)
- O componente **não** guarda estado interno.
- A página é responsável por controlar o valor.

---

### 🧩 API (Props)

```ts
type ScoreCounterProps = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  placeholder?: ReactNode
}
```
### Exemplo de uso

```tsx
import { useState } from 'react'
import { ScoreCounter } from '@/components/ScoreCounter/ScoreCounter'

export const ExemploPlacar = () => {
  const [gols, setGols] = useState(0)

  return (
    <ScoreCounter
      value={gols}
      onChange={setGols}
    />
  )
}
```

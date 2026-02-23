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

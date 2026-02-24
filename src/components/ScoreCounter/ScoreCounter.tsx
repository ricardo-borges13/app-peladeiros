import type { ReactNode } from "react";
import {
  Container,
  ButtonMinus,
  ButtonPlus,
  ValueBox,
} from "./ScoreCounter.styles";

type ScoreCounterProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  placeholder?: ReactNode; // ex: "Gol"
};

const MAX_SCORE = 20;

export const ScoreCounter = ({
  value,
  onChange,
  min = 0,
  max = MAX_SCORE,
  placeholder = "Gol",
}: ScoreCounterProps) => {
  const handleDecrement = () => {
    const next = value - 1;
    if (next < min) return;
    onChange(next);
  };

const handleIncrement = () => {
  const next = value + 1;

  if (next > max) {
    alert(`Nem Pelé fez isso tudo de gol em uma partida, o máximo é ${max} mentiroso.`);
    return;
  }

  onChange(next);
};

  const showPlaceholder = value === 0 && placeholder;

  return (
    <Container>
      <ButtonMinus type="button" onClick={handleDecrement}>
        –
      </ButtonMinus>

      <ValueBox>{showPlaceholder ? placeholder : value}</ValueBox>

      <ButtonPlus type="button" onClick={handleIncrement}>
        +
      </ButtonPlus>
    </Container>
  );
};

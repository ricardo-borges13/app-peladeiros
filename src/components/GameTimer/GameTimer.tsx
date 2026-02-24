import { useEffect, useState } from "react";
import {
  Container,
  TimeText,
  ControlButton,
  ResetButton,
} from "./GameTimer.styles";

type MatchTimerProps = {
  disabled?: boolean;
};

export const GameTimer = ({ disabled = false }: MatchTimerProps) => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  const toggle = () => {
    if (disabled) return; // 🔒 trava o botão
    setRunning(!running);
  };

  const reset = () => {
    console.log("reset");
    if (disabled) return;
    if (!window.confirm("Tem certeza que deseja zerar o cronômetro?")) return;

    setSeconds(0);
    setRunning(false);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formatted = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return (
    <Container>
      <TimeText>{formatted}</TimeText>
      <ControlButton type="button" onClick={toggle} disabled={disabled}>
        {running ? "⏸️ Pausar" : "▶️ Iniciar"}
      </ControlButton>

      {!running && seconds > 0 && (
        <ResetButton type="button" onClick={reset} disabled={disabled}>
          🔁 Zerar
        </ResetButton>
      )}
    </Container>
  );
};

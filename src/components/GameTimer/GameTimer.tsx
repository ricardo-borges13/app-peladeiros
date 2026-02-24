import { useEffect, useState } from "react"
import { Container, TimeText, ControlButton } from "./GameTimer.styles"

type MatchTimerProps = {
  disabled?: boolean
}


export const MatchTimer = ({ disabled = false }: MatchTimerProps) => {
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return

    const interval = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [running])

  const toggle = () => {
    if (disabled) return; // 🔒 trava o botão
    setRunning(!running)
  }

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60

  const formatted = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`

  return (
    <Container>
      <TimeText>{formatted}</TimeText>
      <ControlButton onClick={toggle} disabled={disabled}>
        {running ? "⏸️ Pausar" : "▶️ Iniciar"}
      </ControlButton>
    </Container>
  )
}

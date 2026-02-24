import type { ReactNode } from 'react'
import { Container, ButtonMinus, ButtonPlus, ValueBox } from './ScoreCounter.styles'

type ScoreCounterProps = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  placeholder?: ReactNode // ex: "Gol"
}

export const ScoreCounter = ({
  value,
  onChange,
  min = 0,
  max,
  placeholder = 'Gol',
}: ScoreCounterProps) => {
  const handleDecrement = () => {
    const next = value - 1
    if (next < min) return
    onChange(next)
  }

  const handleIncrement = () => {
    const next = value + 1
    if (typeof max === 'number' && next > max) return
    onChange(next)
  }

  const showPlaceholder = value === 0 && placeholder

  return (
    <Container>
      <ButtonMinus type="button" onClick={handleDecrement}>
        –
      </ButtonMinus>

      <ValueBox>
        {showPlaceholder ? placeholder : value}
      </ValueBox>

      <ButtonPlus type="button" onClick={handleIncrement}>
        +
      </ButtonPlus>
    </Container>
  )
}

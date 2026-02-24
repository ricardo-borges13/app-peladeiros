import type { ReactNode } from 'react'
import { Container, SegmentButton } from './SegmentedControl.styles'

export type SegmentedOption<T extends string = string> = {
  label: ReactNode
  value: T
}

export type SegmentedControlColor =
  | 'primary'
  | 'secondary'

type SegmentedControlProps<T extends string = string> = {
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  color?: SegmentedControlColor
  fullWidth?: boolean
}

export const SegmentedControl = <T extends string>({
  options,
  value,
  onChange,
  color = 'primary',
  fullWidth = true,
}: SegmentedControlProps<T>) => {
  return (
    <Container fullWidth={fullWidth}>
      {options.map((option) => {
        const isActive = option.value === value

        return (
          <SegmentButton
            key={option.value}
            type="button"
            $active={isActive}
            $color={color}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </SegmentButton>
        )
      })}
    </Container>
  )
}

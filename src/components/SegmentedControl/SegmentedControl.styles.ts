import styled, { css } from 'styled-components'
import type { SegmentedControlColor } from './SegmentedControl'

interface ContainerProps {
  fullWidth: boolean
}

interface SegmentButtonProps {
  $active: boolean
  $color: SegmentedControlColor
}

const colorMap = (theme: any, color: SegmentedControlColor) => {
  const map = {
    primary: {
      main: theme.colors.primary,
      text: theme.colors.white,
      inactiveBg: theme.colors.background.primary ?? '#b5b9c4',
      inactiveText: theme.colors.black,

    },

    secondary: {
      main: theme.colors.secondary,
      text: theme.colors.white,
      inactiveBg: theme.colors.background.secondary ?? '#b5b9c4',
      inactiveText: theme.colors.black,
    },

  }

  return map[color]
}

export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background?.global || '#f3f4f6'};

`

export const SegmentButton = styled.button<SegmentButtonProps>`
  flex: 1;
  padding: 10px 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;

  transition: background 0.15s ease, color 0.15s ease;

  ${({ theme, $active, $color }) => {
    const c = colorMap(theme, $color)

    if ($active) {
      return css`
        background: ${c.main};
        color: ${c.text};
      `
    }

    return css`
      background: ${c.inactiveBg};
      color: ${c.inactiveText};

      &:hover {
        opacity: 0.9;
      }
    `
  }}
`

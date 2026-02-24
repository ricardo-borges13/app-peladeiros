import styled, { css, keyframes } from 'styled-components'
import type { ButtonColor, ButtonVariant, ButtonSize } from './Buton'

interface ButtonContainerProps {
  color: ButtonColor
  variant: ButtonVariant
  size: ButtonSize
  radius: number
  width: number
}

const sizeStyles = {
  sm: css`
    padding: 6px 12px;
    font-size: 0.875rem;
  `,
  md: css`
    padding: 12px 16px;
    font-size: 1rem;
  `,
  lg: css`
    padding: 20px 20px;
    font-size: 1.125rem;
  `
}

const colorMap = (theme: any, color: ButtonColor) => {
  const map = {
    primary: {
      main: theme.colors.primary,
      dark: theme.colors.primaryDark,
      text: theme.colors.white
    },
    secondary: {
      main: theme.colors.secondary,
      dark: theme.colors.black,
      text: theme.colors.white
    },
    success: {
      main: theme.colors.success,
      dark: theme.colors.lightSuccess,
      text: theme.colors.white
    },
    danger: {
      main: theme.colors.errorRed,
      dark: theme.colors.error,
      text: theme.colors.white
    },
    warning: {
      main: theme.colors.warningYellow,
      dark: theme.colors.warningYellowDark,
      text: theme.colors.black
    },
    whatsapp: {
      main: theme.colors.whatsappGreen,
      dark: theme.colors.whatsappGreenDark,
      text: theme.colors.white
    },
     update: {
      main: theme.colors.lightPurple,
      dark: theme.colors.Purple,
      text: theme.colors.white
    }
  }

  return map[color]
}

const variantStyles = {
  solid: (theme: any, color: ButtonColor) => {
    const c = colorMap(theme, color)
    return css`
      background: ${c.main};
      color: ${c.text};
      border: none;

      &:hover:not(:disabled) {
        background: ${c.dark};
      }
    `
  },

  outline: (theme: any, color: ButtonColor) => {
    const c = colorMap(theme, color)
    return css`
      background: transparent;
      color: ${c.main};
      border: 2px solid ${c.main};

      &:hover:not(:disabled) {
        background: ${c.main};
        color: ${c.text};
      }
    `
  },

ghost: (theme: any, color: ButtonColor) => {
  const c = colorMap(theme, color)
  return css`
    background: transparent;
    color: ${c.main};
    border: none;

    &:hover:not(:disabled) {
      background: rgba(0, 0, 0, 0.05);
    }
  `
}
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;

  width: ${({ width }) => `${width}%`};

  border-radius: ${({ radius }) => `${radius}px`};
  font-weight: 600;
  cursor: pointer;

  transition: transform 0.08s ease, box-shadow 0.08s ease, background 0.1s ease;

  ${({ size }) => sizeStyles[size]};
  ${({ theme, color, variant }) => variantStyles[variant](theme, color)}

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`
export const PrimaryActionWrapper = styled.div`
  margin-bottom: 12px; 
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.span`
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

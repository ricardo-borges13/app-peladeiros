import styled, { css } from "styled-components"

type ButtonProps = {
  $locked: boolean
}

export const Button = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 8px;

  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px; /* tamanho do ícone 🔒🔓 */

  transition: all 0.2s ease;

  ${({ $locked, theme }) =>
    $locked
      ? css`
          background: ${theme.colors.errorRed || "#ff4d4f"};
          color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        `
      : css`
          background: ${theme.colors.success || "#4caf50"}20; /* leve */
          color: ${theme.colors.success || "#4caf50"};
          border: 2px solid ${theme.colors.success || "#4caf50"};
        `}

  &:active {
    transform: scale(0.95);
  }
`

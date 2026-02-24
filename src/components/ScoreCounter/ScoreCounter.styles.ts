import styled from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
`

export const ButtonMinus = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1rem;

  background: ${({ theme }) => theme.colors.errorRed};
  color: ${({ theme }) => theme.colors.white};

  &:active {
    transform: scale(0.95);
  }

   &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    filter: grayscale(0.3);
  }
`

export const ButtonPlus = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.1rem;

  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};

  &:active {
    transform: scale(0.95);
  }

   &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    filter: grayscale(0.3);
  }
`

export const ValueBox = styled.div`
  min-width: 48px;
  height: 36px;
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #d9f7c8; /* pode depois puxar pro theme se quiser */
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
`

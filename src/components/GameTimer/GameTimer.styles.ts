import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 12px 0;
`

export const TimeText = styled.div`
  font-size: 24px;
  font-weight: 700;
`

export const ControlButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: white;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`


export const ResetButton = styled.button`
background-color: ${({ theme }) => theme.colors.warningYellow};
border-radius: 6px;
border: 1px solid #ccc;
padding: 6px 12px;
`

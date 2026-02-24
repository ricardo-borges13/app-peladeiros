import styled from "styled-components"

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 12px;
`

export const Column = styled.div<{ $variant: "yellow" | "blue" }>`
  padding: 8px;
  border-radius: 6px;

  background: ${({ $variant }) =>
    $variant === "yellow" ? "#F5F8B0" : "#CFE5FF"};
`

export const TeamTitle = styled.div`
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
`

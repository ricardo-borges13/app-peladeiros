import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #333;
  background: #fff;
`;

export const TeamHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const TeamName = styled.div<{ $variant: "yellow" | "blue" }>`
  flex: 1;
  text-align: center;
  font-weight: 600;
  padding: 8px 0;

  background: ${({ $variant }) =>
    $variant === "yellow" ? "#F3F59A" : "#8EC5F7"};

  color: #000;
`;

export const ScoreRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  font-size: 2rem;
  font-weight: 700;
`;

export const ScoreNumber = styled.span`
  min-width: 32px;
  text-align: center;
`;

export const Separator = styled.span`
  margin: 0 12px;
`;

import styled from "styled-components";
import image from "../../assets/image/Principal-800-1400-2jpg.jpg";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url(${image}) center/cover no-repeat;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  padding-top: 50px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 100px;
`;

export const PrimaryActionWrapper = styled.div`
  padding-bottom: 40px;
  width: 90%;
  margin: 0 auto;
`

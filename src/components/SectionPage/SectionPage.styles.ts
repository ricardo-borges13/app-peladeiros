import styled from "styled-components"

export const PageContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary || "#ddd"};
`


export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  text-align: center;
`

export const Content = styled.main`
  flex: 1;
  overflow-y: auto;
`

export const Footer = styled.footer`
  padding-top: 22px;
  flex-shrink: 0;
 
`

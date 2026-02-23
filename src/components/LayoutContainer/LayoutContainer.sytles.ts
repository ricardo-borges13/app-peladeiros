import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  padding: 16px;

  display: flex;
  flex-direction: column;

  @media (min-width: 390px) {
    padding: 20px;
  }

  @media (min-width: 430px) {
    padding: 24px;
  }
`

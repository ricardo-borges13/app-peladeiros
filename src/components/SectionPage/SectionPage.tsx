import type { ReactNode } from "react"
import {
  PageContainer,
  Header,
  BackButton,
  Title,
  Content,
  Footer,
} from "./SectionPage.styles"

type SectionPageProps = {
  title: string
  onBack?: () => void
  rightSlot?: React.ReactNode
  footer?: ReactNode
  children: ReactNode
}

export const SectionPage = ({
  title,
  onBack,
  rightSlot,
  footer,
  children,
}: SectionPageProps) => {
  return (
    <PageContainer>
      <Header>

        {onBack ? (
          <button type="button" onClick={onBack}>←</button>
        ) : (
          <div /> // espaço pra manter o grid alinhado
        )}

        <Title>{title}</Title>

        {rightSlot ?? <div />}

      </Header>

      <Content>{children}</Content>

      {footer && <Footer>{footer}</Footer>}
    </PageContainer>
  )
}

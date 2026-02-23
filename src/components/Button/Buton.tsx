import type { ReactNode, ElementType } from 'react'
import { ButtonContainer, IconWrapper, Spinner } from './Button.styles'

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'whatsapp'

export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  icon?: ReactNode
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
  radius?: number
  fullWidth?: boolean
  isLoading?: boolean
  as?: ElementType
  href?: string
  disabled?: boolean
} & React.HTMLAttributes<HTMLElement>

export function Button({
  children,
  icon,
  color = 'primary',
  variant = 'solid',
  size = 'md',
  radius = 8,
  fullWidth = false,
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading

  return (
    <ButtonContainer
      color={color}
      variant={variant}
      size={size}
      radius={radius}
      fullWidth={fullWidth}
      disabled={isDisabled}
      {...props}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {icon && <IconWrapper>{icon}</IconWrapper>}
          {children}
        </>
      )}
    </ButtonContainer>
  )
}

import { Button } from "./LockToggle.styles"

type LockToggleProps = {
  locked: boolean
  onToggle: () => void
}

export const LockToggle = ({ locked, onToggle }: LockToggleProps) => {
  return (
    <Button type="button" $locked={locked} onClick={onToggle}>
      {locked ? "🔒" : "🔓"}
    </Button>
  )
}

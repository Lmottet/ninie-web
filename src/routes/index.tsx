import { Button } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <div className={`p-2`}>
      <div className={`text-lg`}>Welcome Home!</div>
      <Button color='brandYellow'>Test</Button>
    </div>
  )
}

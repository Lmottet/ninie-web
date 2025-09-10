import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/categories/')({
  component: DashboardIndexComponent
});

function DashboardIndexComponent() {
  return (
    <div className='p-2'>
      <div className='p-2'>Welcome to the dashboard!</div>
    </div>
  );
}

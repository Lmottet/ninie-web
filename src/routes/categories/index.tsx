import { fetchInvoices } from '../../utils/mockTodos';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/categories/')({
  loader: () => fetchInvoices(),
  component: DashboardIndexComponent
});

function DashboardIndexComponent() {
  const invoices = Route.useLoaderData();

  return (
    <div className='p-2'>
      <div className='p-2'>
        Welcome to the dashboard! You have <strong>{invoices.length} total invoices</strong>.
      </div>
    </div>
  );
}

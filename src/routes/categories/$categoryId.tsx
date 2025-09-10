import { Link, createFileRoute, useNavigate } from '@tanstack/react-router';
import * as React from 'react';
import { z } from 'zod';

export const Route = createFileRoute('/categories/$categoryId')({
  params: {
    parse: (params) => ({
      categoryId: z.number().int().parse(Number(params.categoryId))
    }),
    stringify: ({ categoryId }) => ({ categoryId: `${categoryId}` })
  },
  validateSearch: (search) =>
    z
      .object({
        showNotes: z.boolean().optional(),
        notes: z.string().optional()
      })
      .parse(search),
  component: InvoiceComponent
});

function InvoiceComponent() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const invoice = Route.useLoaderData();
  const [notes, setNotes] = React.useState(search.notes ?? '');

  React.useEffect(() => {
    navigate({
      search: (old) => ({
        ...old,
        notes: notes ? notes : undefined
      }),
      replace: true,
      params: true
    });
  }, [notes]);

  return (
    <form className='p-2 space-y-2'>
      <div>
        <Link
          from={Route.fullPath}
          search={(old) => ({
            ...old,
            showNotes: old.showNotes ? undefined : true
          })}
          className='text-blue-700'
          params={true}
        >
          {search.showNotes ? 'Close Notes' : 'Show Notes'}
        </Link>
        {search.showNotes ? (
          <>
            <div>
              <div className='h-2' />
              <textarea
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
                rows={5}
                className='shadow w-full p-2 rounded'
                placeholder='Write some notes here...'
              />
              <div className='italic text-xs'>Notes are stored in the URL. Try copying the URL into a new tab!</div>
            </div>
          </>
        ) : null}
      </div>
      <div></div>
    </form>
  );
}

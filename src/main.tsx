import * as React from "react";
import ReactDOM from "react-dom/client";
import {
  ErrorComponent,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { auth } from "./utils/auth";
import { routeTree } from "./routeTree.gen";
import "@mantine/core/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Loader, MantineProvider } from "@mantine/core";
import { theme } from "./theme";

export const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <Loader />,
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: {
    auth: undefined!, // We'll inject this when we render
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <RouterProvider
      router={router}
      defaultPreload="intent"
      context={{
        auth,
      }}
    />
  );
}

const rootElement = document.getElementById("app")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme}>
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

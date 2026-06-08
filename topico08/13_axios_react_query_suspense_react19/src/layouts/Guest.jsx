
import { Outlet } from "react-router"
import Header from "../components/Header"
import { Navbar } from "../components/Navbar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      experimental_prefetchInRender: true,
    },
  },
});

function Guest() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Header />
      <main className='flex w-full justify-center p-3 sm:p-10 '>
        <ErrorBoundary fallbackRender={(error) => {
          console.info(error)
          return (<p>{error?.error?.message}</p>)
        }}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </QueryClientProvider>
  )
}

export default Guest
import { RecoilRoot } from "recoil";
import { ReactFlowProvider } from "reactflow";
import { QueryClient, QueryClientProvider } from "react-query";
//import { CookiesProvider } from "react-cookie";
import AppRouter from "./AppRouter";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <>
      <RecoilRoot>
        <ReactFlowProvider>
          <QueryClientProvider client={queryClient}>
          <AppRouter />
          </QueryClientProvider>
        </ReactFlowProvider>
      </RecoilRoot>
    </>
  );
}

export default App;

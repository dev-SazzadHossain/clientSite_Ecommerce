import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import AuthContext from "./Context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContext>
          <RouterProvider router={router}></RouterProvider>
        </AuthContext>
      </QueryClientProvider>
    </>
  );
}

export default App;

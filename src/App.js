import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import UserProvider from "./users/providers/UserProvider";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import AlertProvider from "./providers/AlertProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AlertProvider>
          <SnackbarProvider>
            <CustomThemeProvider>
              <Layout>
                <Router />
              </Layout>
            </CustomThemeProvider>
          </SnackbarProvider>
        </AlertProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

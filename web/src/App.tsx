import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "app/router/router";
import { theme } from "app/styles/theme";

import { AlertContextProvider } from "./contexts/modal/context.modal";

import { Alert } from "./components/Alert";

import "./styles/styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertContextProvider>
        <RouterProvider router={router} />
        <Alert/>
      </AlertContextProvider>
    </ThemeProvider>
  );
}

export default App;
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "app/router/router";
import { theme } from "app/styles/theme";

import { AlertContextProvider } from "./contexts/modal/context.modal";
import { MenuContextProvider } from "./contexts/menu/context.menu";

import { Alert } from "./components/Alert";

import "./styles/styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuContextProvider>
        <AlertContextProvider>
          <RouterProvider router={router} />
          <Alert />
        </AlertContextProvider>
      </MenuContextProvider>
    </ThemeProvider>
  );
}

export default App;
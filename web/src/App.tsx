import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "app/router/router";
import { theme } from "app/styles/theme";

import { AlertContextProvider } from "./contexts/modal/context.modal";
import { MenuContextProvider } from "./contexts/menu/context.menu";
import { UploadFileModalContextProvider } from "app/contexts/upload_file_modal/context.upload_file_modal";

import { Alert } from "./components/Alert";
import { UploadFileModal } from "app/layout/internal/UploadFileModal";

import "./styles/styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuContextProvider>
        <AlertContextProvider>
          <UploadFileModalContextProvider>
            <RouterProvider router={router} />
            <Alert />
            <UploadFileModal />
          </UploadFileModalContextProvider>
        </AlertContextProvider>
      </MenuContextProvider>
    </ThemeProvider>
  );
}

export default App;
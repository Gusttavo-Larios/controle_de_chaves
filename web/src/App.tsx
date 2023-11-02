import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import {router} from "app/router/router";
import { theme } from "app/styles/theme";

import "./styles/styles.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
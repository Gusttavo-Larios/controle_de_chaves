import { createBrowserRouter } from "react-router-dom";

import Login from "app/pages/login";
import RegisterComplete from "app/pages/register_complete";
import Main from "app/pages/main";
import KeyDetails from "app/pages/keyDetails";
import MainAdm from "app/pages/main-adm";
import MainAdmServers from "app/pages/adm-servers";
import MainAdmKeys from "app/pages/adm-key";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/completar-cadastro",
    element: <RegisterComplete/>,
  },
  {
    path: "/chaves",
    element: <Main/>,
  },
  {
    path: "/chaves/:id",
    element: <KeyDetails/>,
  },
  {
    path: "/administrativo",
    element: <MainAdm/>,
  },
  {
    path: "/administrativo/servidores",
    element: <MainAdmServers/>,
  },
  {
    path: "/administrativo/chaves",
    element: <MainAdmKeys/>,
  },
]);

export {
  router
}
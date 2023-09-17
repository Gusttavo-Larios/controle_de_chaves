import { createBrowserRouter } from "react-router-dom";

import Login from "app/pages/login";
import RegisterComplete from "app/pages/register_complete";
import Main from "app/pages/main";
import KeyDetails from "app/pages/keyDetails";
import MainAdm from "app/pages/main-adm";
import MainAdmServers from "app/pages/adm-servers";
import MainAdmKeys from "app/pages/adm-key";

export default createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register-complete",
    element: <RegisterComplete/>,
  },
  {
    path: "/main",
    element: <Main/>,
  },
  {
    path: "/key-details",
    element: <KeyDetails/>,
  },
  {
    path: "/main-adm",
    element: <MainAdm/>,
  },
  {
    path: "main-adm-servers",
    element: <MainAdmServers/>,
  },
  {
    path: "main-adm-keys",
    element: <MainAdmKeys/>,
  },
]);

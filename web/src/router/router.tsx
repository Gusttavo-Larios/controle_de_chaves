import { createBrowserRouter } from "react-router-dom";

import Login from "app/pages/login";
import RegisterComplete from "app/pages/register_complete";

export default createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/register-complete",
    element: <RegisterComplete/>,
  },
]);

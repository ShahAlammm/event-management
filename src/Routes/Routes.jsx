import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import LogIn from "../Components/LogIn/LogIn";
import Register from "../Components/Register/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch(`/data.json`),
      },
      {
        path:"/login",
        element:<LogIn></LogIn>,
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ],
  },
]);

export default Routes;

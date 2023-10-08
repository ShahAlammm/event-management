import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import LogIn from "../Components/LogIn/LogIn";
import Register from "../Components/Register/Register";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import Booking from "../Pages/Booking/Booking";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`/data.json`),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/booking",
        element: <Booking></Booking> ,
      },
      {
        path: "/item/:id",
        element: <ViewDetails></ViewDetails>,
        loader:()=> fetch(`/data.json`)
      },
    ],
  },
]);

export default Routes;

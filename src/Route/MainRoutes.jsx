import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Brands from "../Pages/Brands";
import AboutDev from "../Pages/AboutDev";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Couponpage from "../Pages/Couponpage";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgotPassword from "../Pages/ForgotPassword";


const MainRoutes = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[{
        path:'/',
        element:<Home/>,
        loader:()=>fetch('/Data.json')
    },
    {
        path:"/brands",
        element:<Brands/>,
        loader:()=>fetch('/Data.json')
    },
    {
        path:"/about",
        element:<AboutDev/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:'/forget-pass',
        element:<ForgotPassword/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:'/brands/:id',
        loader:()=> fetch('/Data.json'),
        element:<PrivateRoute><Couponpage/></PrivateRoute>
    },
    {
        path:'/my-profile',
        element:<PrivateRoute><MyProfile/></PrivateRoute>
    },
    {
        path:'/updateprofile',
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
    }

]
  },])

export default MainRoutes;
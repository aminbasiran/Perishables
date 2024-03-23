import React,{lazy} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { RequireAuth } from './components';
const LandingPage = lazy(()=>import('./pages/LandingPage/LandingPage.jsx'));
const Home = lazy(()=>import('./pages/Home/Home.jsx'));
const Register = lazy(()=>import('./pages/Register/Register.jsx'));
const Login = lazy(()=>import('./pages/Login/Login.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "/register",
        element: <Register />,
        // loader: teamLoader,
      },
      {
        path: "/login",
        element: <Login />,
        // loader: teamLoader,
      },
      {
        path: "/landing",
        element: <LandingPage />,
        // loader: teamLoader,
      },
      {
        index:true,
        path: "/home",
        element:<Home />
      },
      // {
      //   index:true,
      //   path: "/home",
      //   element:  <RequireAuth>
      //               <Home />
      //             </RequireAuth>
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

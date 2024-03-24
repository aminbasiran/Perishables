import React,{lazy} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { RequireAuth,Template } from './components';
const LandingPage = lazy(()=>import('./pages/LandingPage/LandingPage.jsx'));
const Home = lazy(()=>import('./pages/Home/Home.jsx'));
const Register = lazy(()=>import('./pages/Register/Register.jsx'));
const Login = lazy(()=>import('./pages/Login/Login.jsx'));
const Dashboard = lazy(()=>import('./pages/Dashboard/Dashboard.jsx'));
const Recipe = lazy(()=>import('./pages/Recipe/Recipe.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/landing",
        element: <LandingPage />,
      },
      {
        element: <Template/>,
        children : [
          {
            path: "/dashboard",
            element:<Dashboard />
          },
          {
            path: "/recipes",
            element:<Recipe />
          },
          {
            path: "/home",
            element:  <RequireAuth>
                        <Home />
                      </RequireAuth>
          },

        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

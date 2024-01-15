import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./Pages/Home/Home.jsx"
import Add from "./Pages/Add/Add.jsx"
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Detail from './Pages/Detail/Detail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "add",
        element: <Add/>,
      },
      {
        path: "detail/:productId",
        element: <Detail/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

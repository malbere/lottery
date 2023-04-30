import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import CreateAccountForm from './pages/CreateAccountFormPage';
import Login from './pages/Login'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "register",
    element: <CreateAccountForm/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "play",
    element: <Play/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();

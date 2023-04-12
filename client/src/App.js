import React, { Children } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import { QRCode } from "./pages/QRCode";
import Navbar from "./components/Navbar";
import FooterAnt from "./components/Footer";
import RSVPQrCode from "./pages/RSVPQrCode";
import { CssBaseline } from "@material-ui/core";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterAnt />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/post/:id/getqr",
        element: <RSVPQrCode />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: "/single",
    element: <Single />,
  },
  // {
  //   path: "/qrcode",
  //   element: <QRCode />,
  // },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
      <CssBaseline />
    </div>
  );
}

export default App;

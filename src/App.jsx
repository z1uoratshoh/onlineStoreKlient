import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import { AboutUs, Contact, Course, Login, Selected } from "./routes/routes";
// import Course from "./pages/course/course";
// import Loading from "./components/loading/loading";
import ProductById from "./pages/products/productById/productById";
import Home from "./pages/home/home";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/selected",
          element: (
            <Suspense>
              <Selected />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "/productById/:id",
          element: (
            <Suspense>
              <ProductById />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense>
              <Course />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;

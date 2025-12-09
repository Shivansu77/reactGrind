import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContactUs from './components/ContactUs';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </Suspense>
        )
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

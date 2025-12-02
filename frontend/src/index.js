import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import ContactUs from './components/ContactUs';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contactus",
    element:<ContactUs/>
  }
]);
//done

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './style.css'
import './stylemobile.css'
import './pages/pagesstyle.css'
import Quickeasy from './quickeasy';
import Vehicles from './vehiclemodels';
import Banner from './banner';
import Whyus from './whyus';
import Review from './review';
import Faq from './faq';
import Store from './store';
import Navlandbook from './navlandbook';
import Footer from './footer';
import About from './pages/about';
import Carmodels from './pages/carmodels';
import Contact from './pages/contact';
import Ourteam from './pages/ourteam';
import Testimonials from './pages/testimonals';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";

const Page=()=>{
    return(
        <div>
            <Outlet/>
            <Footer/>
        </div>
    )
}
const Main=()=>{
    return(
        <div>
  <Navlandbook/>
  <Quickeasy/>
  <Vehicles/>
  <Banner/>
  <Whyus/>
  <Review/>
  <Faq/>
  <Store/>
        </div>
    )
}
const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
      ],
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/carmodels",
      element: <Carmodels />,
    },
    {
      path: "/ourteam",
      element: <Ourteam />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/testimonals",
      element: <Testimonials />,
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

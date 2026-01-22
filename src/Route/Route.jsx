import { createBrowserRouter } from "react-router";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Skills from "../Pages/Skills";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";

export const router = createBrowserRouter([
    {
    path: "/",
    Component : Root,
    
    children: [
      {
        index: true,
        Component: Home
      }    
    ]
    },
    
      {
        path:"/projects",
        Component: Projects
      },
       {
        path:"/contact",
        Component: Contact
      }
    
])
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Error from "./component/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import RestaurantMenu from "./component/RestaurantMenu";

const AppLayout = () => {
    return (
        <div>
            <Header />
           <Outlet />
           <Footer/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error />,
    children: [
        {
            path: "/",  //children of app layout [to call HEADER AND FOOTER]
            element: <Body />,
        },
    {
        path: "/about", 
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
    },
    {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
    },
    ]
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    },
    
])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider  router={appRouter} />);
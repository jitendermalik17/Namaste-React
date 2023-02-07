import React, { lazy, Suspense , useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import Error from "./src/component/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./src/component/Contact";
import Footer from "./src/component/Footer";
import RestaurantMenu from "./src/component/RestaurantMenu";
import Profile  from "./src/component/Profile";
import Shimmer from "./src/component/Shimmer";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/component/Cart";

//it is A Dynamic Import
const About = lazy(()=> import("./src/component/About"));
const Instamart = lazy(() => import("./src/component/Instamart")); //it takes a function
//upon on demmand loading  ---> upon render ---->  suspend loading [bcause code is not there]

//import About from "./component/About";
//import Instamart from "./component/Instamart";


//chunking
//Code Spiliting
//Dynamic Bundling
//Lazy Loading
//on Demand Loading
//Dynamic Import



const AppLayout = () => {
 const [user, setUser] = useState({
    name : "Jitender Malik",
    email: "jitendermalik17@gmail.com",
 });
 
    return (
        <div>
        <Provider store={store}>
        <UserContext.Provider value={{
            user: user,
            setUser: setUser,
        }}>
            <Header />
           <Outlet />
           <Footer/>
        </UserContext.Provider>
        </Provider>
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error />,
    children: [{
            path: "/",  
            element: <Body />,
        },
    {
        path: "about", 
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <About />
        </Suspense>,
        children: [{
            path:"profile",
            element: <Profile />,
        }]
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    ,
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
    },
    {
        path: "instamart",
        element: <Suspense fallback={<Shimmer />}>
        <Instamart />
        </Suspense>,
    }

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
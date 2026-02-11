import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"


const Grocery = lazy(()=>import("./components/grocery"))

const AppLayout = () => (
    <div className="app-layout">
        <Header/>
        <Outlet/>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children:[
            {
                path: "/contact",
                element: <Contact/> 
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/home",
                element: <Body/>
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/res/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
                )
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);
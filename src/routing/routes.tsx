import { RouteObject } from "react-router-dom";
import Pages from "./pages-enum";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import Calendar from "../pages/Calendar/Calendar";
import Page404 from "../pages/Page404/Page404";


const routes: RouteObject[] = [{
    path: Pages.Home,
    element: <Layout />,
    children: [
            {
                path: Pages.Home,
                element: <Home />,
            },
            {
                path: Pages.Calendar,
                element: <Calendar />,
            },
            {
                path: Pages.Undefined,
                element: <Page404 />,
            },
        ]
    },
]

export default routes;
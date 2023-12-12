import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import MainLayout from "./layout/main";
import Index from "./pages/index";
import Calendar from "./pages/calendar";

import "./main.css"
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
            {
                path: "/calendar",
                element: <Calendar />,
            }
        ],
    },
], {basename: "/drunk-calendar/"});

const root = document.querySelector("#root")

if (root) {
    createRoot(root).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
}

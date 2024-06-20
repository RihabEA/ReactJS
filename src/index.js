import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import LinkedList from "./components/LinkedList";
import Tree from "./components/Tree";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/linkedList',
                element: <LinkedList />,
            },
            {
                path: '/tree',
                element: <Tree />,
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
)

reportWebVitals();

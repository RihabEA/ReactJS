import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import LinkedList from "./components/LinkedList";
import Tree from "./components/Tree";
import ReactQuery from "./components/ReactQuery";
import ZustandExample from "./components/ZustandExample";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
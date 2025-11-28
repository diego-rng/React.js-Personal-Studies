import { React } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { App } from './components/App.tsx';
import { Home } from './components/Home.jsx';
import { Relatorios } from './components/Relatorios.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/relatorios",
        element: <Relatorios />,
    }
]);

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
); 
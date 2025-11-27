import { React, StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { App } from './components/App.tsx';
import { Home } from './components/Home.jsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
    }
]);

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
); 
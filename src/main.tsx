import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import JoinRoom from './Page/JoinRoom/joinroom.tsx';
import CreateRoom from './Page/CreateRoom/createroom.tsx';



const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CreateRoom />,
      },
      {
        path: "/joinroom",
        element: <JoinRoom />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './page/About.jsx'
import Destinations from './page/Destinations.jsx'
import Contact_us from './page/Contact us.jsx'
import Legends_Myth from './page/Legends & Myth.jsx'
import Rituals_Worship from './page/Rituals & Worship.jsx'
import Spiritual_blog from './page/Spiritual blog.jsx'
import ContentDES from './page/ContentDES.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/destinations",
    element: <Destinations />,
  },
  {
    path: "/contact",
    element: <Contact_us />,
  },
  {
    path: "/legends",
    element: <Legends_Myth />,
  },
  {
    path: "/rituals",
    element: <Rituals_Worship />,
  },
  {
    path: "/spiritual",
    element: <Spiritual_blog />,
  },
  {
    path: "/contentdes",
    element: <ContentDES />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


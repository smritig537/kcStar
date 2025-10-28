import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'  // App now exports the router config
import './index.css'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import References from './components/References.jsx'
import Contact from './components/Contact.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  // Wrapper for shared layout (Navbar + Routes + Footer)
    children: [
      { index: true, element: <Hero /> },  // / -> Home
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "references", element: <References /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  { path: "*", element: <Hero /> },  // 404 fallback
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
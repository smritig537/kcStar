import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />  {/* Renders child route elements like Hero, About, etc. */}
      <Footer />
    </>
  )
}

export default App
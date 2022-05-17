import { BrowserRouter, Routes, Route } from "react-router-dom"
import Intro from "./pages/Intro/Intro"
import About from "./pages/About/About"
import Service from "./pages/Service/Service"
import Contact from "./pages/Contact/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

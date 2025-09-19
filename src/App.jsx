import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Home from "./pages/Home"
import AddStd from "./pages/AddStd"
import View from "./pages/View"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  

  return (
    <>

     <Routers>

      <Navbar/>

      <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/AddStd" element={<AddStd/>}/>
       <Route path="/update-std/:id" element={<AddStd/>}/>
       <Route path="/view-std/:id" element={<View/>}/>

      </Routes>


     </Routers>


     <ToastContainer position="top-right" autoClose={3000} />

    </>
  )
}

export default App

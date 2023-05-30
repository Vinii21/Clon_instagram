import './App.css'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.page'
import Perfil from "./pages/Perfil.page"
import ModalNewPost from "./components/ModalNewPost";
import { useSelector } from "react-redux";

function App() {
  const showModal = useSelector(state=>state.showModal)

  return (
    <BrowserRouter>
        {
          showModal && <ModalNewPost />
        }
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/perfil' element={<Perfil/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.page'
import Perfil from "./pages/Perfil.page"
import ModalNewPost from "./components/ModalNewPost";
import { useSelector } from "react-redux";
import Chats from './pages/Chats';
import Conversation from './pages/Conversation';

function App() {
  const showModal = useSelector(state=>state.showModal)
console.log(showModal)

  return (
    <BrowserRouter>
        {
          showModal && <ModalNewPost />
        }
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/direct' element={<Chats/>}/>
        <Route path='/direct/chat' element={<Conversation/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componnt/Navbar/Navbar'
import Home from './pages/Home/Home'
import SearchPage from './pages/SearchPage/SearchPage'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import SingUp from './pages/SingUp/SingUp'
import MyShop from './pages/MyShop/MyShop'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SearchPage' element={<SearchPage />} />
        <Route path='/Cart/:name' element={<Cart />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SingUp' element={<SingUp />} />
        <Route path='/MyShop' element={<MyShop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

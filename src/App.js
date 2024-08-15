import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/cart' element={<Cart/>} />
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

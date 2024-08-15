import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            
          />
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

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login';
//import Advertise from './Components/advertise/Advertise';
import Home from './Components/home/Home';
import Offers from './Pages/Offers';
import Newarrival from './Pages/Newarrival';
import Men from './Pages/Men';
import Jacket from './Components/category/Jacket';
import Tshirt from './Components/category/Tshirt';
import Shirt from './Components/category/Shirt';
import Jeans from './Components/category/Jeans';
import Signup from './Pages/Signup';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
    
    
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/men" element={</>} /> */}
        <Route path="/newarrival" element={<Newarrival/>} />
        <Route path="/offers" element={<Offers/>} />

        <Route path="/men" element={<Men/>} />
        <Route path="/jacket" element={<Jacket/>} />
        <Route path="/tshirt" element={<Tshirt/>} />
        <Route path="/shirt" element={<Shirt/>} />
        <Route path="/jeans" element={<Jeans/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import './Pages/Style.css'
import Index from './Pages/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header';
import Addtocart from './Pages/Addtocart';
import Shoppingbag from './Pages/Shoppingbag';
import { Route, Routes } from 'react-router-dom';
import Cart_item from './Pages/Cart_item';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
   <>
   <Header />
   <Routes>

        <Route path="/" element={<Index />} /> 
        <Route path="/item/:id" element={<Cart_item />} />
        <Route path='addtocart' element={<Addtocart/>} />
        <Route path='shoppingbag' element={<Shoppingbag/>} />
       
      </Routes>
      
   </>
  );
}

export default App;

import './App.css';
import Header from './Pages/Header';
import Cart from './Pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Blog from './Pages/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartitem from './Pages/Cartitem';
import Category from './Pages/Category';
import Beauty from './Pages/Beauty';
import Prectice from './Pages/Prectice';
import Addtocart from './Addtocart';
import Shoppingbag from './Shoppingbag';
import ProceedToShopping from './ProceedToShopping';

function App() {
  return (
    <>
      <Header />
      {/* <Cartitem/>

      <Routes>
     
      <Route path="/" element={<Category />} /> 
      </Routes> */}

      <Routes>
        <Route path="/" element={<Cart />} /> 
        <Route path='/item/:id' element={<Blog />} />
        <Route path='addtocart' element={<Addtocart/>} />
        <Route path='shoppingbag' element={<Shoppingbag/>} />
        <Route path='ProceedToShopping' element={<ProceedToShopping/>} />
      </Routes>

      
     

      

    </>
  );
}

export default App;
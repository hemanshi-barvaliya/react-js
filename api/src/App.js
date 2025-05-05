import './App.css';
import Header from './Pages/Header';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      {/* <Cartitem/>

      <Routes>
     
      <Route path="/" element={<Category />} /> 
      </Routes> */}

      <Routes>
        {/* <Route path="/" element={<Cart />} />  */}
        <Route path='/item/:id' element={<Cart_Items/>} />
        {/* <Route path='addtocart' element={<Addtocart/>} />
        <Route path='shoppingbag' element={<Shoppingbag/>} />
        <Route path='ProceedToShopping' element={<ProceedToShopping/>} /> */}
      </Routes>

      
     

      

    </>
  );
}

export default App;
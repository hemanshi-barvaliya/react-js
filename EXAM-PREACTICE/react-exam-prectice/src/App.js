import './App.css';
import Header from './pages/Header';
import { Routes, Route } from 'react-router-dom'; // Import Route and Routes
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addtobag from './pages/Addtobag';
import Shopitem from './pages/Shopitem';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/item/:id" element={<Blog />} />
        <Route path="/Addtobag" element={<Addtobag />} />
        <Route path="/Shopitem" element={<Shopitem />} />
      </Routes>
    </div>
  );
}

export default App;

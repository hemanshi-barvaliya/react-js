import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Memo from './pages/Memo';
import Context from './pages/Context';
import { createContext, useState } from 'react';
import Ref from './pages/Ref';

export const namecontext = createContext();




function App() {

  const [name, setname] = useState("Hello");

  return (
    <div >

      {/* <namecontext.Provider value={name}>
      <Context/>
      </namecontext.Provider> */}
      {/* <Header/> */}
      {/* <Memo /> */}
      <Ref/>
     
        

    </div>
  );
}

export default App;

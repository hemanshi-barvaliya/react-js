import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {  decrement, increment } from './resultSlicer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  var value = useSelector((state)=>state.counter.value)

  var dispatch  = useDispatch()

  return (
    <>
    <h1 className='App'>React Redux</h1>
  
    <div className=" d-flex justify-content-center">
      
      <button onClick={()=>dispatch(increment())}>+</button>
      <h1>{value} </h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
    
    </div>
    </>
  );
}

export default App;

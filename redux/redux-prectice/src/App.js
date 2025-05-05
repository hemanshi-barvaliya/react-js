import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { btn } from './resultSlicer';

function App() {

  var name = useSelector((state)=>state.student.sname)
  var dispatch  = useDispatch()

  return (
    <div className="App">
     <h1>Name : {name} </h1>
     <button onClick={()=>dispatch(btn())}>Click To Change</button>
    </div>
  );
}

export default App;




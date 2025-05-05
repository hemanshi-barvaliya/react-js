import logo from './logo.svg';
import './App.css';
import { btn } from './counterSlicer';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  var name = useSelector((state)=>state.student.sname)
  var dispatch = useDispatch()
  return (
    <div className="App">
      <h1>
        name:{name}
      </h1>

      <button onClick={()=>dispatch(btn())}>click</button>
    </div>
  );
}

export default App;

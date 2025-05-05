import logo from './logo.svg';
import './App.css';
import  Header from './pages/Header.js'
import Fotter from './pages/Footer.js'
// import { Link, Route, Routes } from 'react-router-dom';
import Footer from './pages/Footer.js';
import { Link, Route, Routes } from 'react-router-dom';
import { HiH1 } from 'react-icons/hi2';
import Puzzle from './pages/Puzzle.jsx'



function App() {
//   var name = 'Creative';
//   var mobile = 98546132003;

//   var arr = [10,20,30,40,55]; 

//   var student = {
//     name:'abc',
//     age:18,
//     email:'abc@gmail.com',

// };

//   var school = [

//     {name:'Ashadeep', address:'Katargam'},
//     {name:'PP Savani', address: 'Kamrej'},
//     {name:'Gyandeep', address: 'Sarthana'}, 
//   ];


  return (
    <>
     <div className="App">
    
      <Puzzle />

{/* 
     <Link to="Header">Header</Link><br></br>
     <Link to="Footer">Footer</Link>


      <Routes>
        <Route path="Header" element={ <Header/> } />
        <Route path="Footer" element={ <Footer/> } />
      </Routes> */}

      {/* <h3>Name: {name}</h3>
      <h3>Mobile: {mobile}</h3>
      <h3>Student Name: {student.name}</h3>
      <h3>Student Name: {student.age}</h3>
      <h3>Student Name: {student.email}</h3>
      
      {
        arr.map((v,i)=>{
          return(
            <h1>{i}={v}</h1>
          )
        }
      )
      }

      {
        school.map((v,i)=>
        {
          return(
            <h1>
              {i+1}
              {v.name}
              {v.address}
            </h1>
          )
        })
      } */}


    
    </div>
    


    </>
    
  );
}

export default App;

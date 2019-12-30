import React from 'react';
import logo from './logo.svg';
import './App.css';
import Function from './Function'
import Class from './Class'
//import Class from './Appc'


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to relod.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//    </div>
//   );
// }

function App(){
  return(
    <div>
      <h3 className='text-center'>function component</h3>
      <Function name='Omkar'/>
      <Class day='monday'/>
      
    </div>
  )
}
export default App;

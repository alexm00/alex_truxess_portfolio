import './App.css';


//import files
  import About from './About'
  import Home from './Home'
  import NavBar from "./NavBar"

import {Routes, Route} from "react-router-dom"


  // return (
  //   <div classname="App">
  //     <header className="App-header">
  //     <div className="chicago">
  //       <Typical
  //         loop={1}
  //         wrapper='b'
  //         steps={['Name: Alex Truxess', 1000]}/>
  //     </div>
  //     <div className="chicago">
  //       <Typical
  //         loop={1}
  //         wrapper='b'
  //         steps={['Occupation: MEng CS Student at VT', 1000]}/>
  //     </div>
  //     </header>
  //   </div>
  // )


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar />
            <Routes>
              <Route path='/' eaxct element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
            </Routes>
      </header>
    </div>

  );
}


export default App;

import './App.css';
import Starfield from './Starfield.tsx';


//import files
  import About from './About'
  import Home from './Home'
  import Projects from './Projects'
  import Contact from "./Contact"
  import NavBar from "./NavBar"

// import {Routes, Route} from "react-router-dom"


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


// function App() {
//   return (
//     <div className="App">
//       <Starfield
//         starCount={1000}
//         starColor={[255, 255, 255]}
//         speedFactor={0.05}
//         backgroundColor="black"
//       />
//       <header className="App-header">
//           <NavBar />
//             <Routes>
//               <Route path='/' eaxct element={<Home/>}/>
//               <Route path='/about' element={<About/>}/>
//               <Route path='/projects' element={<Projects/>}/>
//               <Route path='/contact' element={<Contact/>}/>
//             </Routes>
//       </header>    

//     </div>

//   );
// }

function App() {
  return (
    <div className="App">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
         backgroundColor="black"
       />
      <div>
        <NavBar />
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}


export default App;

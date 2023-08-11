import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';


const NavBar = () => {
    return (
      <>
        <Nav>
          <Bars />
            <NavBtn>
                <NavBtnLink to='/'>Home</NavBtnLink>
            </NavBtn>
            <NavBtn>
                <NavBtnLink to='/projects'>Projects</NavBtnLink>
            </NavBtn>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          <NavBtn>
            <NavBtnLink to='/links'>Links</NavBtnLink>
          </NavBtn>
          <NavBtn>
                <NavBtnLink to='/about'>About</NavBtnLink>
            </NavBtn>
        </Nav>
      </>
    );
  };

// function NavBar(){
//     return(
//         <ul>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/about">About</Link>
//             </li>
//         </ul>
//     );
// }

export default NavBar;
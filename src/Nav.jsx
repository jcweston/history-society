import React from 'react';
import NavButton from './NavButton'

const Nav = () => {
    return ( 
        <div className="navBar">
            <NavButton name="Home" />
            <NavButton name="About" />
            <NavButton name="News" />
            <NavButton name="Events" />
            <NavButton name="WW1 and Beyond" />
            <NavButton name="Resources" />
            <NavButton name="Gallery" />
            <NavButton name="Publications" />
        </div>
        
     );
}
 
export default Nav;
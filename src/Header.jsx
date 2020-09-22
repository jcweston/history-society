import React from 'react';
import header from './Images/Header-Image.png'

const Header = () => {
    return ( 
        <div className='topBar'>
            <img src={header} className='headerImage' alt="Chebsey Parish Local History Society"/>
        </div>
        
     );
}
 
export default Header;
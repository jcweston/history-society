import React, { Component } from 'react';
import {Link} from '@reach/router'

class NavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let link=this.props.name.toLowerCase()
        if (link==="home") {
            link=""
        }
        return ( 
            <Link className='link' to={`/${link}`} >
                <h2 className='navButton'>{this.props.name}</h2>
            </ Link>
         );
    }
}
 
export default NavButton;
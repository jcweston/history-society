import React, { Component } from 'react';
import {Link} from '@reach/router'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='footer'>
                <Link to={`/contact us`} >
                    <h3 className='footerLink'>Contact</h3>
                </ Link>
                <Link to={`/new article`} >
                    <h3 className='footerLink'>New Article</h3>
                </ Link>
                <Link to={`/login`} >
                    <h3 className='footerLink'>Login</h3>
                </ Link>
            </div>
         );
    }
}
 
export default Footer;
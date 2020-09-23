import React, { Component } from 'react';
import {Link} from '@reach/router'

class GalleryNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Link to='norton'>
                    <h4>Norton Bridge</h4>
                </Link>
                <Link to='chebsey'>
                    <h4>Chebsey</h4>
                </Link>
                <Link to='shallowford'>
                    <h4>Shallowford</h4>
                </Link>
                <Link to='other'>
                    <h4>Other</h4>
                </Link>
            </div>
         );
    }
}
 
export default GalleryNav;
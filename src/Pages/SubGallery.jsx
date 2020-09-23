import React, { Component } from 'react';

class SubGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='page'>
                <p>{this.props.name}</p>
            </div>
            
         );
    }
}
 
export default SubGallery;
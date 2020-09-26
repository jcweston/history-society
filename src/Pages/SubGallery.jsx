import React, { Component } from 'react';
import SmartGallery from 'react-smart-gallery'
import images from '../Images/images'


class SubGallery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            images: [
                images[0].src
            ]
         }
    }
    render() {
        return ( 
            <div className='page'>
                <p>{this.props.name}</p>
                <SmartGallery images={this.state.images} />
            </div>
            
         );
    }
}

 
export default SubGallery;
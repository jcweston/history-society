import React, {Component} from 'react';
import SubGallery from './SubGallery'
import GalleryNav from '../GalleryNav'
import {Router} from '@reach/router'

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router className='page'>
            <GalleryNav 
                path='/' />
            <SubGallery 
                path='norton'
                name='Norton Bridge'/>
            <SubGallery 
                path='chebsey' 
                name='Chebsey'/>
            <SubGallery 
                path='shallowford'
                name='Shallowford'/>
            <SubGallery 
                path='other' />
        </Router>
         );
    }
   
}
 
export default Gallery;
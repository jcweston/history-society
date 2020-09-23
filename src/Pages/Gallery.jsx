import React from 'react';
import SubGallery from './SubGallery'
import GalleryNav from '../GalleryNav'
import {Router} from '@reach/router'

const Gallery = () => {
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
                path='shallowford' />
            <SubGallery 
                path='other' />
        </Router>
     );
}
 
export default Gallery;
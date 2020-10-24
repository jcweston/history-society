import React, { Component } from 'react';
import SmartGallery from 'react-smart-gallery'
// import images from '../Images/images'
import axios from 'axios'


class SubGallery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            images: [],
            isLoading:true
         }
    }
    render() {
        return ( 
            <div className='page'>
                {this.state.isLoading&&
                    <p>Loading</p>
                }
                {this.state.images.map((element,i) => {
            return ( 
                <div key={i}>
                    <img src={element.image} alt={element.name}/>
                </div>
            )})}



           
            </div>
            
         );
    }

    componentDidMount = () => {
        this.getGallery()
    }

    getGallery = () =>{
        const name=this.props.name
        axios.get(`https://chebsy-be.herokuapp.com/api/images`)
        .then(res => {
            let arr=res.data['Images'] 
            arr.filter(element=>element.location==={name})
            console.log(arr[0].location)
          this.setState({
            images:res.data['Images'],
            isLoading:false
          })
        })
      }
    
    sortImages = () => {
        
       
        
    }

}

 
export default SubGallery;
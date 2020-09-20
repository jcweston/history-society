import React, { Component } from 'react';
import axios from 'axios'

class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading:true,
            article:{}
         }
    }
    render() { 
        if (this.state.isLoading===true) {
            return (
                <h3>Loading ... Please Wait</h3>
            )
        }
        return ( 
            <div>
                <h3>{this.state.article.title}</h3>
                <h5>{this.state.article.created_at}</h5>
                <p>{this.state.article.body}</p> 
            </div>
            
         );
    }

    componentDidMount = () => {
        this.getData()
    }

    getData = () =>{
        console.log(this.props)
        axios.get(`https://chebsy-be.herokuapp.com/api/articles/${this.props.id}`)
        .then(res => {
          this.setState({
            article:res.data.article,
            isLoading:false
          })
        })
      }
}
 
export default NewsItem;
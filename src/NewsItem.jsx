import React, { Component } from 'react';

class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const data=this.props.article
        return ( 
            <div>
                <h4>{data.title}</h4>
                <h5>{data.created_at}</h5>
                <p>Text</p> 
            </div>
            
         );
    }
}
 
export default NewsItem;
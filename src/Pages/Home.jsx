import React, { Component } from 'react';
import NewsItem from '../NewsItem'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        console.log(this.props.articles[0])
        let article=[]
        if (this.props.articles.length==0) {
            article=false
        } else {
            article=this.props.articles[0]
        }
        return ( 
            <div>
                <p>Postcard Image</p>
               <h3>Recent News</h3> 
               <NewsItem article={article} />
            </div>
            
         );
    }
}
 
export default Home;
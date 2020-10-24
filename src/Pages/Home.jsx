import React, { Component } from 'react';
import NewsItem from '../NewsItem'
import postcard from '../Images/Postcard.png'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articleID:false
         }
    }
    render() { 
        let article=[]
        if (this.props.articles.length===0) {
            article=false
        } else {
            article=this.props.articles[0]
        }
        return ( 
            <div className='homeBox'>
                <div className='postcard'>
                    <img src={postcard} alt='Norton Bridge Postcard' className="homeImage"/>
                </div>
                <div className='homeColumn'>
                    <h3>Recent News</h3> 
                    {this.checkLoading(article)}
                    <h3>Upcoming Events</h3>
                </div>
               
            </div>
            
         );
    }
    checkLoading = (article) => {
        if (article===false) {
            return (
                <h3>Loading ... Please Wait</h3>
            )
        } else {
            return (
                <NewsItem id={article.article_id} />
            )
        }
    }

    
}
 
export default Home;
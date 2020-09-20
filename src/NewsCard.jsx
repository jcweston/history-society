import React, {Component} from 'react';
import {Link} from '@reach/router'

class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="newsCard">
            <Link className='link' to={`${this.props.article.article_id}`} >
                <h3>{this.props.article.title}</h3>
            </Link>
            <h6>{this.props.article.created_at}</h6> 
            <p>{this.firstHundred()} ...</p>
            <Link className='link' to={`${this.props.article.article_id}`} >
                Read More
            </Link>
            
        </div>
         );
    }

    firstHundred = () => {
        return this.props.article.body.slice(0,200)
    }
}
 
export default NewsCard;
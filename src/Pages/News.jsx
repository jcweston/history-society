import React from 'react';
import NewsItem from '../NewsItem'

import {Router} from '@reach/router'
import NewsList from '../NewsList';

const News = (props) => {
    let articles=props.articles
    console.log("rendering")
    return ( 
        <div>
            <h2>News</h2>
            <Router>
                <NewsList path='/' articles={articles} />
                <NewsItem path=':id' />
            </Router>
            
        </div>
     );
}
 
export default News;
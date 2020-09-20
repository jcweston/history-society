import React from 'react';
import NewsItem from '../NewsItem'

import {Router} from '@reach/router'
import NewsList from '../NewsList';

const Events = (props) => {
    let events=props.events
    console.log(events)
    return ( 
        <div>
            <h2>Events</h2>
            <Router>
                <NewsList path='/' articles={events} />
                <NewsItem path=':id' />
            </Router>
        </div>
     );
}
 
export default Events;
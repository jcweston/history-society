import React, { Component } from 'react';
import NewsCard from './NewsCard'
import NewsNav from './NewsNav'

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            page:0,
            perPage:5
         }
    }
    render() {
        let pageStart=this.state.page*this.state.perPage
        let pageEnd=pageStart+this.state.perPage 
        let arr = this.props.articles.slice(pageStart,pageEnd)
        return ( 
            <div className='NewsList'>
            {arr.map((element,i) => {
            return ( 
                <div key={i}>
                    <NewsCard article = {element}/>
                </div>
            )})}
            <NewsNav 
                pageChange={this.pageChange} 
                page={this.state.page}
                sizeChange={this.sizeChange} />
            
            </div>
             );
    }

    pageChange = (num) => {
        const newPage=this.state.page+num
        this.setState({
            page:newPage
        })
    }

    sizeChange = (num) => {
        const newSize = num
        this.setState({
            perPage:newSize
        })
    }
}
 
export default NewsList;
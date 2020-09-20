
import React, { Component } from 'react';
import axios from 'axios'

class NewsNew extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <form className='newArticle' onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" onChange={this.handleChange} />
                    </label>
                    <label>
                        Body:
                        <textarea name="body" onChange={this.handleChange} />
                    </label>
                    <label>
                        <input type="radio" id='news' name="topic" value='news' onChange={this.handleChange} />
                        <label for='news'>News</label>
                        <input type="radio" id='event' name="topic" value='event' onChange={this.handleChange} />
                        <label for='event'>Event</label>
                    </label>
                    <button type='submit'>Create Article</button>
                </form>
            </div>
         );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const article = {

        }
        axios.post('https://news-northcoders.herokuapp.com/api/articles',{article}).then(res => {
            console.log(res)
        })
    }
}
 
export default NewsNew;
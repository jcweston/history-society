import React, { Component } from 'react';

class NewsNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if (this.props.page===0) {
            return ( 
                <div>
                    <button onClick={()=>this.props.pageChange(1)}>Next Page</button>
                    <button onClick={()=>this.props.sizeChange(5)}>5 per page</button>
                    <button onClick={()=>this.props.sizeChange(10)}>10 per page</button>
                </div>
             );
        } else {
           return ( 
            <div>
                <button onClick={()=>this.props.pageChange(-1)}>Previous Page</button>
                <button onClick={()=>this.props.pageChange(1)}>Next Page</button>
                <button onClick={()=>this.props.sizeChange(5)}>5 per page</button>
                    <button onClick={()=>this.props.sizeChange(10)}>10 per page</button>
            </div>
         ); 
        }
        
    }
}
 
export default NewsNav;
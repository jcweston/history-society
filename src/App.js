import React, { Component } from 'react';
import Header from './Header'
import Nav from './Nav'
import About from './Pages/About'
import News from './Pages/News'
import Events from './Pages/Events'
import LoginButton from './LoginButton'
import Home from './Pages/Home'

import {Router, Link} from '@reach/router'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading:true,
      articles:[]
     }
  }
  render() { 
    return ( 
      <>
      <div className="topBar">
        <Header />
        <LoginButton />
      </div>
      <div className="body">
        <Nav />
        <Router className="page">
          <Home path='/' articles={this.state.articles}/>
          <About path='about'/>
          <News path='news' articles={this.state.articles}/>
          <Events path = 'events' />
        </Router>
      </div>
    </>
     )}

     componentDidMount = () => {
       this.getData()
     }

    getData = () =>{
      axios.get("https://news-northcoders.herokuapp.com/api/articles")
      .then(res => {
        this.setState({
          articles:res.data.articles,
          isLoading:false
        })
      })
    }

}
 
export default App;

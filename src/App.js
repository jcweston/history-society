import React, { Component } from 'react';
import Header from './Header'
import Nav from './Nav'
import About from './Pages/About'
import News from './Pages/News'
import Events from './Pages/Events'
import Home from './Pages/Home'
import WWI from './Pages/WWI'
import Resources from './Pages/Resources'
import Gallery from './Pages/Gallery'
import Publications from './Pages/Publications'
import Contact from './Pages/Contact'
import Attributions from './Pages/Attributions'
import NewsNew from './Pages/NewsNew'
import Login from './Pages/Login'

import {Router} from '@reach/router'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading:true,
      articles:[],
      events:[]
     }
  }
  render() { 
    return ( 
      <div className='container'>
        <Header/>
        <Nav />
        <Router className="page">
          <Home path='/' articles={this.state.articles}/>
          <About path='about'/>
          <News path='news/*' articles={this.state.articles}/>
          <Events path = 'events/*' events={this.state.events}/>
          <WWI path = 'ww1%20and%20beyond' />
          <Resources path = 'resources' />
          <Gallery path = 'gallery' />
          <Publications path = 'publications' />
          <Contact path = 'contact%20us' />
          <Attributions path = 'attributions%20and%20copyright' />
          <NewsNew path = 'new%20article' />
          <Login path = 'login' />
        </Router>
    </div>
     )}

     componentDidMount = () => {
       this.getArticles()
       this.getEvents()
     }

    getArticles = () =>{
      axios.get("https://chebsy-be.herokuapp.com/api/articles")
      .then(res => {
        this.setState({
          articles:res.data.articles,
          isLoading:false
        })
      })
    }

    getEvents = () => {
      axios.get("https://chebsy-be.herokuapp.com/api/articles?sort_by=eventDate&event=true&order=desc")
      .then(res => {
        this.setState({
          events:res.data.articles,
          isLoading:false
        })
      })
    }

}
 
export default App;

import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article/Article'

class Articles extends Component {
  render() {
    return (
      <div>
        <ArticleList/>
        <Route path='/articles' children = {this.getIndex} exact/>
        <Route path='/articles/:id' render = {this.getArticle}/>
      </div>
    )
  }
  getArticle = ({ match }) => {
    const {id} = match.params
    return <Article id={id} isOpen key={id}/>
  }
  getIndex = ({ match }) => {
    if (!match) return <h3>Article:</h3>
    return <h3>Please select article</h3>
  }
}

export default Articles

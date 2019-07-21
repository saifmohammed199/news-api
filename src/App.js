import React from 'react'
import Home from './components/home'
import './App.css'
import 'tachyons'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Us from './components/us'
import India from './components/india'
import Turkey from './components/turkey'
import More from './components/more'

function App () {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/india' component={India} />
        <Route path='/us' component={Us} />
        <Route path='/turkey' component={Turkey} />
        <Route path='/more' component={More} />
      </div>
    </Router>
  )
}

export default App

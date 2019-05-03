import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import View from './pages/view'
import NotFound from './pages/notFound'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/view' component={View} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

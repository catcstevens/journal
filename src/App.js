import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home'
import NewEntry from './components/NewEntry'
import CategorySelection from './components/CategorySelection'
import NotFound from './components/NotFound'

const App = () => {
  return (
    // <h1>Journal</h1>
    <BrowserRouter>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/category">Category</Link></li>
      <li><Link to="/entry/new">Entry</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/entry/new" component={NewEntry} />
      <Route exact path="/category" component={CategorySelection} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  )
}

export default App

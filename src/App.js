import React, {useState} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from "./components/Home"
import NewEntry from "./components/NewEntry"
import CategorySelection from "./components/CategorySelection"
import NotFound from "./components/NotFound"

const App = () => {
  const defaultCategories = ["food", "coding", "other"]
  const [categories] = useState(defaultCategories)
  const [entries,setEntries] = useState([])

  function addEntryToJournal(newEntry) {
    const updatedEntries = [...entries, newEntry]
    setEntries(updatedEntries)
  }
  console.log(entries)
  return (
    <div>
      <h1>Journal</h1>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} entries={entries}/>} />
          <Route exact path="/entry/new/:id" render={(props) => <NewEntry {...props} categories={categories} addEntryToJournal={addEntryToJournal} />} />
          <Route exact path="/category" render={(props) => <CategorySelection {...props} categories={categories} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  </div>
  )
}

export default App

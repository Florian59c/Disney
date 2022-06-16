import React from 'react'
import App from './App'
import NotFound from './components/NotFound'
import Company from './components/Company'
import DescFilms from './components/DescFilms'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

// creation d'un composant stateless qui va contenir notre système de routes
const Root = () => {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={App} />
              <Route path="/company/:name" component={Company} />
              <Route path="/movie/:id" component={DescFilms} />
              
              {/* si aucune route ne correspond à ce qui est specifié dans l'url on affiche le composant NotFound */}
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    )
  }
  
  export default Root
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from '../../styles/Global'
import Home from '../Home'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

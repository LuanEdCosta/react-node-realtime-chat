import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/Global'
import { DARK_THEME } from '../../styles/Theme'
import Home from '../Home'

const App = () => {
  return (
    <ThemeProvider theme={DARK_THEME}>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

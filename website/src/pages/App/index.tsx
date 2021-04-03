import { ThemeProvider } from 'styled-components'

import { LIGHT_THEME, GlobalStyles } from 'src/styles'
import Main from 'src/pages/Main'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  )
}

export default App

import { ThemeProvider } from 'styled-components'

import { LIGHT_THEME, GlobalStyles } from 'src/styles'
import { UserProvider } from 'src/providers'
import { AppRoutes } from 'src/routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <GlobalStyles />

      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App

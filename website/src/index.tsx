import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from 'src/pages/App'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)

reportWebVitals(console.log)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/authContext'
import { DarkModeContextProvider } from './context/darkModeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/*   使用以下元素包裹，将能使用 darkModeContext包裹的任意value*/}
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>

  </React.StrictMode>

)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/Store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<ChakraProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider></Provider>
);

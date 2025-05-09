import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import Layout from './components/Layout/Layout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
)
 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// The type of writing you see below is called JSX => a mix of HTML and JavaScript
// main.jsx is the absolute heart of our project, we don't usually write any code here.
createRoot(document.getElementById('root')).render(
  <App />
)
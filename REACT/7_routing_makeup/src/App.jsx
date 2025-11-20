import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'
import ProductsPage from './pages/ProductsPage'

const App = () => {
  // in app.jsx we usually host the routing mechanism

  // BrowserRouter is the router used for web browsers(google chrome, safari, mozilla, firefox etc.)

  // To define our routes, we need the Routes component
  // ^The usefulness of Routes component is that before and after declaring it, we can put common elements in between
  return (
    <BrowserRouter>

      <Header />

      <main className='full-height'>
        <Routes>
          {/* for the homepage route is '/' */}
          {/* element is what will be displayed when the user is on that page */}
          <Route path='/' element={<MainPage />} />
          <Route path='/profile' element={<ProfilePage/>} />
          <Route path='/product' element={<ProductsPage/>} />
        </Routes>
      </main>

      <Footer />

    </BrowserRouter>
  )
}

export default App
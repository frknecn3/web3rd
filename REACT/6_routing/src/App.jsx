import { useState } from "react"
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserPage from "./pages/UserPage";

const App = () => {

  // LET'S SUMMARIZE THE WAY TO USE REACT ROUTER DOM

  // 1) npm i react-router-dom

  // 2) in App.jsx => delete everything

  // 3) put a <BrowserRouter>

  // 4) put a <Routes> inside that <BrowserRouter>

  // 5) put all of your individual <Route> inside that <Routes>

  // 6) Give all of your routes a path (e.g /profile ) and an element to display



  return (
    // We define a browser router because we are currently developing on a browser(chrome,safari,edge)
    <BrowserRouter>

      {/* ^ Before you get into your routes, you can define elements here to make them common among all your pages.*/}
      <Header />

      {/* Routes element is important to inform the library that you will define your routes in it */}
      <main className="full-height">
        <Routes>
          {
            // * this is our individual route(page) itself 
          }
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/product" element={<ProductsPage />} />

          {
            // ^ for dynamic routes we use ROUTE PARAMETERS

            /* 
              E.G => a /user route where the layout of the page is same for all users but the details have to change
            */

            /*
              To define a route parameter, put a / after your route name and then define your parameter's name with a : before it
            */
          }
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
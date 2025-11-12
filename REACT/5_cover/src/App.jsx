import React, { useEffect, useState } from 'react'
import Card from './components/Card'
// import { Cards } from './helpers/constants'
import axios from 'axios'

const App = () => {

  // Component Lifecycle React

  //* 1) componentDidMount => the beginning/mounting of the component, comparable to a human being born

  // * CORE POINT: runs once, empty dep list

  // ^ 2) componentDidUpdate => similar to how a human grows up and changes, updates on components(colors, values, links) everything counts as an update

  // ^ CORE POINT: runs several times, based on dep list update

  // ! 3) componentDidUnmount => the ending/unmounting of the component, comparable to a human dying.

  // ! CORE POINT: The effect function can return a function, and THIS WILL BE RUN WHEN THE COMPONENT IS UNMOUNTED

  // -----------------------------------------------------------------

  // In React, we can catch all of these events by using a hook called "useEffect"

  // * If you want a function to run only when the component loads, just use an empty dependency list.

  useEffect(() => {
    // alert('Page has loaded')

    // axios http request chaining
    axios
      // send a GET request to this URL
      .get('http://localhost:4000/products')
      // then if it's successful, do these: 
      // (set my products data as the data I got from the API)
      .then((res) => setProducts(res.data))
      // if you catch any errors, do these: (log in the console the error)
      .catch((err) => console.error(err))

  }, [])

  const [number, setNumber] = useState(0)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (number !== 0) {
      // alert('the number has just changed')
    }

  }, [number])



  return (
    <div>
      <h1>Welcome Back</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>

      {/* {
        number < 3 ? <Card title='Grapes' /> : ''
      } */}

      <div className="cards">
        {
          products.map((item, key) => (
            <Card
              title={item.title}
              price={item.price}
              rating={item.rating}
              key={key}
            />))
        }
      </div>

    </div>
  )
}

export default App


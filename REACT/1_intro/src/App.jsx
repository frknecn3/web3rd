import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'

// * Component => Component is a unit of our webpages created with React.
// * For instance, this specific file has a component called App, it returns some HTML code that can later on be exported to other files and imported and then called.

// ^ What is the difference between functions and components?
// ^ Functions return everything but HTML codes, Components are functions that return only HTML code.

// ! SO - Function returns everything  BUT Component returns HTML

function App() {

  const loading = false;


  // All components HAVE TO return a single element
  // So, the container element must be single, but it can have as many children as it wants.

  // ? If you don't want to have a parent component wrapping the children
  // You can use React Fragment ( <> </> ) - It will not be visible on your webpage, and has no styling, class etc.

  const cards = [
    {
      title: "Mt.Everest",
      info: "The highest mt in the world"
    },
    {
      title: 'Mt.Fuji',
      info: 'The highest in Japan.'
    },
    {
      title: 'Mt. Ararat',
      info: 'The highest in Turkey'
    },
    {
      title: "Alps",
      info: "Highest ones in Europe."
    }
  ]

  return (
    <div className='cards-container'> { /* parent */}
      {
        // if NOT LOADING
        !loading 
        // Then display cards
        ? cards.map((card) => <Card title={card.title} info={card.info} />) 
        // Otherwise just return an empty string(don't display any cards)
        : '' 
      }
    </div>
  )
}

export default App

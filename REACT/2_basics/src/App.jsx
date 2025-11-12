import { useState } from 'react'
import HelloText from './components/HelloText'
import Counter from './components/Counter';



const App = () => {

  // In normal JavaScript, to listen for events, we would have to use element.addEventListener to run functions when certain events happen on certain elements.

  // In React, it is much more simple than JavaScript

  // All React HTML elements have their own attributes for listening to events

  // ! This is not the correct way to store values that can be later changed in React.
  // let color = "black";

  // ^ The reason is, whenever some value on the component changes, it has to re-render itself for the changes to apply.

  // * The correct way to hold values that can later change, is by using a "hook" called "useState"

  // * useState() returns us an array of two values, the first one is the value that we want to hold, the second one is a function to change that value

  // ^ And for a 'default' value you can put it inside useState's parantheses

  const [color, setColor] = useState('green');

  const [password, setPassword] = useState('');
  const [isAllowed, setIsAllowed] = useState(false);



  // function to check whether the value entered is the value that we want

  const handleSubmit = () => {

    if (password == 'ilovereact') {
      // if the user submits(click on login) and the password is correct
      // then allow them
      alert('Welcome back!')
      setIsAllowed(true);
    }
    else {
      alert('Password is wrong.')
    }

  }



  return (
    <div style={{ backgroundColor: color }}>

      {/* 
          // ^ CONDITIONAL RENDERING
      */}

      {
        // * IF I AM ALLOWED
        isAllowed == true ? (
          // * THEN SHOW ME THE CONTENT OF THE WEBPAGE
          <>
            <HelloText name="Furkan" color='rgba(0, 255, 170, 1)' />

            <main>
              <button
                // inline css
                style={{
                  backgroundColor: "red"
                }}

                onClick={(e) => {
                  alert('You clicked on the button!')
                  console.log("click event:", e)
                }}

              >Click Me!</button>



              <button
                onClick={() => {
                  //  ! WON'T WORK
                  // color = "yellow"

                  // * WILL WORK
                  setColor('purple');
                }}
              >
                Change Color
              </button>

            </main>

            <main>
              <Counter />
            </main>
          </>
        )
          // ! OTHERWISE (colon :)
          : (
            <div className='password-container'>
              <input
                type="text"
                placeholder='Enter secret password to progress...'
                onChange={(e) => { setPassword(e.target.value) }}
              />
              <button
                className=''
                onClick={() => {
                  handleSubmit();
                }}
              >LOGIN</button>
            </div>
          )
      }




    </div>
  )

}

export default App;
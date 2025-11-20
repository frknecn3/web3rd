import React, { useEffect } from 'react'

const Card = ({title = "Card", price = 50, rating = 3}) => {

    // ! 3) componentDidUnmount => the ending/unmounting of the component, comparable to a human dying.

    // ! CORE POINT: The effect function can return a function, and THIS WILL BE RUN WHEN THE COMPONENT IS UNMOUNTED

    useEffect(()=>{
        // will be ran just before the component is removed from the screen
        return () => {
            alert('Card was removed from the screen.')
        }
    }, [])

    // -----------------------------------------------------------


    return (
        <div>
            <h1>{title}</h1>
            <span>{price}₺</span>
            <img src="https://picsum.photos/200" alt="" />
            <span>RATING: {rating}</span>
        </div>
    )
}

export default Card
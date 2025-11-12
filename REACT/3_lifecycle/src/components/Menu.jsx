import { useEffect, useState } from "react";

const Menu = () => {



    // React Lifecycle

    // useEffect => Is a function we can use to access component's lifecycle periods

    // for example, by using useEffect, we can run a function when the component first loads

    // when something on the component updates

    // or when the component gets unmounted(unrendered) removed from the page

    const [slide, setSlide] = useState(false);


    // ^ useEffect takes two parameters,
    // * The first is "the effect" meaning the function you want to run when the component first mounts OR when something on the page changes
    // & The second is "the dependency list" meaning the list of variables that trigger the "componentDidUpdate" lifecycle, so if anything inside the dependency list changes then the "effect" will run again.

    useEffect(() => {

        // * setTimeout is for timing functions to run after a set amount of delay, in this case we want to run a function that sets our slide value to true AFTER 300 milliseconds
        setTimeout(() => {
            setSlide(true);
        }, 50)


        //* ComponentDidUnmount =>
        // When you return a function inside a useEffect, it's the componentDidUnmount function and it runs when a component is removed from the page.

        // ! It runs just before the component is removed
        return () => {
            alert('Menu has just been removed from HTML.')
        }

    }, [])

    return (
        <div className={`menu ${slide && 'visible'} `}>
            <a href="">Menu</a>
            <a href="">Menu</a>
            <a href="">Menu</a>
            <a href="">Menu</a>
            <a href="">Menu</a>
        </div>
    )
}

export default Menu;
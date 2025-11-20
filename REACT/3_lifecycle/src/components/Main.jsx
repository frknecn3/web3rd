import { useState } from "react";
import Menu from "./Menu";
import Counter from "./Counter";

const Main = () => {

    // Component Lifecycle

    // This is the <main> element, it first appears on our webpage when the webpage is first loaded.

    // for values that can change, we dont define them directly like javascript, instead we use "useState"
    const [menuVisible, setMenuVisible] = useState(false);

    return (

        <main className="main">
            Main
            <button onClick={() => setMenuVisible(!menuVisible)}>
                { menuVisible ? 'Close Menu' : 'Open Menu'}
            </button>

            {
                // if you want to show two different things based on a value, use ? : (ternary operator)

                // if you want to show a single element or NOTHING based on a value, use &&

                //! instead of this
                // menuVisible ? <Menu /> : ''
                //* use this
                menuVisible && <Menu/>
            }

            <Counter />
        </main>
    )
}

export default Main;
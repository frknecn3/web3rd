import { useState } from "react";

const Counter = () => {

    const [number, setNumber] = useState(0);


    return (
        <div className="counter-wrapper">

            <div className="counter-box">

                {/* button to decrease */}
                <button
                    className="btn minus"
                    onClick={() => 
                        setNumber(number > 0 ? number - 1 : number)
                    }
                >-</button>

                <div className="count-wrapper">
                    {/* text holding the number */}
                    <span className="count">{number}</span>
                    {/* button to reset to 0 */}
                    <button
                        onClick={() => setNumber(0)}
                    >RESET</button>
                </div>

                {/* button to increase */}
                <button
                    className="btn plus"
                    onClick={() => setNumber(number < 20 ? number + 1 : number)}
                >+</button>
            </div>
        </div>
    )
}

export default Counter;
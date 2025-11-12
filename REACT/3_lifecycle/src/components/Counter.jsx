import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const maxOrder = 10;

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    };

    const handleIncrease = () => {
        if (count < maxOrder) {
            setCount(count + 1)
        }
        else {
            alert("You've hit the maximum order number.")
        }
    };

    useEffect(
        // effect runs either when the component first mounts or sth inside dependency list changes
        () => {

        }, [count])


    return (
        <div className='counter'>
            <button onClick={() => handleDecrease()}>-</button>
            <div className='count-wrapper'>
                <span className='count'>{count}</span>
            </div>
            <button onClick={() => handleIncrease()}>+</button>
        </div>
    )
}

export default Counter
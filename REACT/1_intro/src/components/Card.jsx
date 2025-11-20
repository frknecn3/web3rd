


// * PROPS:
// Props in React are basically parameters for our component functions
// For Example:
// We have 10 cards, but for now, all 10 of them are the same
// So rather than defining new components for different information of our components
// We can re-use them with differnet values

const Card = ({title = 'New Card', info = 'New Info'}) => {
    return (
        <div className='card'>
            {/* Child 1 */}
            <img 
            src={`https://picsum.photos/id/${Math.round(Math.random() * 100)}/200/200`} alt="" />
            <h1>{title}</h1>
            <ul>
                <li>
                    <li>{info}</li>
                </li>
            </ul>
        </div>
    )
}

export default Card;
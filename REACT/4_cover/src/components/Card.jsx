// PROPS

// PROPS are basically parameters inside a React Component
// They help us make our components dynamic by shaping their texts, looks and other attributes.

const Card = ({name = 'Plant', desc = 'Description' }) => {

    return(
        <div className="card">
            <h4>{name}</h4>
            <div className="img-container">
                <img src='https://picsum.photos/100' alt="" className="card-image" />
            </div>
            <p>
                {desc}
            </p>
        </div>
    )
}

export default Card
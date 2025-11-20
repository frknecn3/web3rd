


const HelloText = ({ name, color }) => {

    // Inline CSS in React

    return (
        <h1
            // normal inline css doesnt work
            // style="color: red;"

            // ^instead, use this:
            style={{
                color
            }}

        >
            Hello, {name} welcome back!
        </h1>
    )
}

export default HelloText;
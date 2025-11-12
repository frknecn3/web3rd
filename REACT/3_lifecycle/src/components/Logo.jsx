const Logo = () => {

    return (
        <div className="logo">
            Website
        </div>
    )
}

export default Logo;

// Export is ambiguous, you can export a file without a destination.
// Kind of like saying "I am exporting this file, anyone(any other file) can use it"

// Importing is unambiguous, you can only use an external(exported) file by importing it in the file that you are going to use it.
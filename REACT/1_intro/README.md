# Our First React Project

Hello, this is our first react project ever.


## Basics of React

- Component Structure:

Each part of a React project is called a component. Components are modular pieces of HTML that can be called like functions whenever required, making us free of writing HTML every time we need a specific element in the webpage.

- A component is basically a function that instead of a number,object,array,boolean or Date, returns a HTML code. A component can be written both in normal function type OR arrow-function type.


### How to Create a Component

- Creating a component is very simple.

1. Create a new file with the name of your component, bear in mind that the first letter has to be capitalized. The reason for this is it's easy to confuse a component with default HTML elements.

2. In that file, define a function that returns any type of HTML code.

3. Just like functions, defining them isn't enough, so we have to call them, and to call them we have to export them. So export your component by using export default.

4. After exporting, import the element wherever you need to use it.

5. After importing, have your element's name in between html open-closing tags e.g `<Card/>`


### JavaScript inside HTML

Normally in HTML we use template literal `${}` to use JS code in texts. In React's HTML, we use just { } (curly braces) without backticks to run JavaScript inside HTML.

- Modular CSS:

In React, you don't have to import your css files with `<link>` tags, you can just import your css files in your components to directly access and use them.
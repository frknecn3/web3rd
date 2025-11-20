const form = document.querySelector('.create-form');
const titleInput = document.querySelector('#title-input')
const categoryInput = document.querySelector('#category-create-input');
const priceInput = document.querySelector('#price-input');

// in update product page we need to first get the actual values of the product we want to update

// to do this, we used a parameter in the url to know which product we are working on (we got the ID of it)

// using that ID, we can send a GET request to the db to get the values of that item

// we want to send this request when the page loads immediately

// normally parsing params is a little bit difficult but JS has some tools to make it easier

const params = new URLSearchParams(window.location.search)

const id = params.get('productId')


document.addEventListener('DOMContentLoaded', async () => {


    const response = await fetch(`http://localhost:3000/products/${id}`)

    // only in API requests, .json() function actually decrypts it from json to JS
    const data = await response.json()

    // after we get the actual current values, we want to fill in with the relevant data

    titleInput.placeholder = data.title;
    categoryInput.value = data.category;
    priceInput.placeholder = data.price;
})



// from now on it's the entire same thing as create.js

form.addEventListener('submit', async (e) => {

    // prevent the default event(refreshing the webpage) from happening
    e.preventDefault();


    // we want to create the object that we want to send to the db.json

    const newProduct = {
        title: titleInput.value,
        category: categoryInput.value,
        price: priceInput.value
    }

    // ^ 2 THINGS DIFFERENT BETWEEN POST(CREATE) AND PATCH(UPDATE)
    // ? METHOD HAS TO BE PATCH
    // ? YOUR URL REQUIRES THE ID OF THE PRODUCT YOU WANT TO UPDATE
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: "PATCH",
            body: JSON.stringify(newProduct)
        })

        if (response.ok) {
            window.location.pathname = '/index.html'
        }
    }
    catch (err) {
        console.error(err)
        alert(err.message)
    }
})

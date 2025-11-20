import API from "./api.js";
import UI from "./ui.js";

// get a new api object instance with the class of API
const api = new API();
const ui = new UI();


// * We run the function to get the first songs when the page loads

document.addEventListener('DOMContentLoaded', async () => {

    ui.renderLoader();

    const songs = await api.getPopular();

    ui.renderCards(songs)
})


// ! Listen for form submit event

ui.form.addEventListener('submit', async (e) => {

    // prevent the page from reloading
    e.preventDefault();

    // access the content of the input and get rid of the spaces at the beginning and ending
    const query = e.target[0].value.trim();

    // if there is no query, alert the user
    if (!query) {
        alert('Please enter a valid search query.')

        return; //* Return stops the function from running
    }


    ui.renderLoader();

    // update the "Popular Songs" title with our search query

    ui.sectionTitle.textContent = `Search results for ${query}`;

    // ^ send API request to search for songs that match our query

    const songs = await api.getSearchMusic(query);

    // * Since we already have the function to convert our javascript song data into HTML cards, we can just use it and pass our songs data directly into it

    ui.renderCards(songs);
})

// ^ We want to listen for all click events on the musicList

ui.musicList.addEventListener('click', (e) => { 

    // we are listening for all click events that occur in musicList, BUT we can run some functions only when our specific criteria(the target is a play button) is met
    
    if(e.target.className == "play"){
        
        // get the closest card element (the parent) to the button that we clicked on

        const card = e.target.closest('.card');

        // get the properties that are set to the card //* DATASET

        const songData = card.dataset;

        // pass all the data to the mp3 player

        ui.playSong(songData);

    }

})
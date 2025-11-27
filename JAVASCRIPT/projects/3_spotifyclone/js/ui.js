class UI {
    // creating method
    constructor() {
        // * we can access the elements that we're going to use in HTML
        this.musicList = document.querySelector('#music-list');
        this.form = document.querySelector('form');
        this.sectionTitle = document.querySelector('#section-title');
        this.player = document.querySelector('.player');
    }

    // let's create a function to render cards we fetch from API in our page.
    renderCards(songs) {
        // First things first, we want to RESET everything inside the music-list
        this.musicList.innerHTML = "";

        // for each element inside the songs array that comes from outside(api function)
        songs.map((song) => {

            // ^ create a card element for my song
            const card = document.createElement('div');

            // ^ add a class to this new card;
            card.className = 'card';

            // add all the data regarding the song's singer, title, image, group name etc. everything to the HTML element

            console.log(song)
            
            
            // & CHANGED
            card.dataset.title = song.name;
            card.dataset.subtitle = song.artistName;
            card.dataset.image =
                song.artwork.url
                    .replace('{w}', "1000")
                    .replace('{h}', '1000');
            card.dataset.mp3 = song.previews[0].url;

            // define the inners of this newly created card div
            // ! Notice that we are not creating the card div again, only the inside of it

            // & CHANGED
            card.innerHTML = `
                <figure>
                    <img
                        src="${card.dataset.image}"
                        alt="card-image"
                    />
                    <div class="play">
                        <i class="bi bi-play-fill"></i>
                    </div>
                </figure>

                <div class="card-info">
                    <h4>${song.name}</h4>
                    <h4 class="subtitle">${song.artistName}</h4>
                </div>
            `

            //finally, put this card into the musicList element
            this.musicList.appendChild(card)

        })
    }

    // Function to set the audio player to play the song with the data that we give
    async playSong(song) {
        //^ Change the player part of the interface to show information related to the song

        this.player.innerHTML = `
        <div class="info">
            <img src="${song.image}" alt="music-image" id="music-image" />
            <div>
                <h5 id="music-title">${song.title}</h5>
                <p id="artist-title">${song.subtitle}</p>
            </div>
        </div>

        <audio id="music-sound" src="${song.mp3}" controls></audio>

        <div class="icons">
            <i class="bi bi-boombox"></i>
            <i class="bi bi-music-note-list"></i>
            <i class="bi bi-pc-display"></i>
        </div>
        `

        // access the audio element
        const audioElement = document.querySelector('#music-sound');

        audioElement.play()

        audioElement.addEventListener('play', () => {
            // access the img element
            const img = document.querySelector("#music-image");

            // add the animate class to the img element
            img.classList.add('animate')
        })

        audioElement.addEventListener('pause', () => {
            // access the img element
            const img = document.querySelector("#music-image");

            // add the animate class to the img element
            img.classList.remove('animate')
        })

    }

    renderLoader() {
        this.musicList.innerHTML = `
            <div class="loader">
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            <div class="loader-square"></div>
            </div>
        `
    }
}


export default UI;
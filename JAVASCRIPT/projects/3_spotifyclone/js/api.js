// ^ This api.js will manage everything regarding API requests/options etc.

class API {
    constructor() {
        this.options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'f0f4b72c7fmsha422ace7eaa00bep1b1020jsn0a4046a6c85c',
                'x-rapidapi-host': 'shazam.p.rapidapi.com'
            }
        };
        this.baseURL = `https://shazam.p.rapidapi.com`
    }

    // ^ Function to get popular songs
    async getPopular() {
        try {
            // send api request
            const response = await fetch(
                `${this.baseURL}/search?term=kiss%20the%20rain`,
                this.options
            )

            // Convert the response from json format to js
            const data = await response.json();

            // * this songs data returns us our songs BUT they all hold the music data inside an unnecessary middleman called "track" so we need a transformation

            // return the final converted songs
            return data.tracks.hits.map((item) => item.track)
        }
        catch (err) {
            alert(`ERROR: `, err);
            console.error(err);
            return [];
        }
    }

    // * Function to ACTUALLY search for songs

    async getSearchMusic(query) {
        try {
            // send an api request
            const response = await fetch(
                `${this.baseURL}/search?term=${query}`,
                this.options
            );

            // turn the data that comes from api into js object

            const data = await response.json();

            // return the fixed songs without the "track" middleman just like how we did above
            return data.tracks.hits.map((item) => item.track)
        }
        catch (err) {
            alert(`ERROR: `, err);
            console.error(err);
            return [];
        }
    }

}




// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }

export default API;
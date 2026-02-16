// testing API urls
// const url = "https://api.genius.com/artists/16775?access_token=RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu";

// const url = "https://api.genius.com/search?q=kendrick+lamar&access_token=RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu";


// console.log(url);
// https://api.genius.com/search?q={your_query}&access_token=RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu


let submitButton = document.getElementById("submit");
console.log(submitButton);

const string = document.querySelector("#songs");


// on click (submitting search function in html) prevent default and get input value
submitButton.addEventListener("click", function(e){
    e.preventDefault();

    // grab value from search bar
    const searchInput = document.getElementById("site-search");
    const searchArtist = searchInput.value;
    // API access key
    const key = "RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu";
    console.log(searchArtist);
    
    // call generate function to make the url and return it to next function
    const url = generateURL(searchArtist, key);
    // start the function and pass it url
    getData(url);

})


// combine the variables to get the corresponding url
function generateURL(artist, apiKey) {
    return `https://api.genius.com/search?q=${artist}&access_token=${apiKey}`;
}

// grab the data from the corresponding url
async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    // grab the title of their most popular song
    const songs = data.response.hits[0].result.title;
    // check if there's a null
    if(data.response.hits[0]==null){
        songs= "please check spelling";
    }
    // display the song
    console.log(songs);
    string.innerHTML = songs;
}



// const key = "RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu";
// const url = generateURL(searchArtist, key);


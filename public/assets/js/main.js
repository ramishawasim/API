console.log("hello");

// const url = "https://api.genius.com/artists/16775?access_token=RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu";

// const url = "https://api.genius.com/search?q=kendrick+lamar&access_token=RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu";


// console.log(url);
// https://api.genius.com/search?q={your_query}&access_token=RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu


let submitButton = document.getElementById("submit");
console.log(submitButton);

const string = document.querySelector("#songs");



submitButton.addEventListener("click", function(e){
    e.preventDefault();

    const searchInput = document.getElementById("site-search");
    const searchArtist = searchInput.value;
    const key = "RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu";
    console.log(searchArtist);
    
    const url = generateURL(searchArtist, key);
    getData(url);

})



function generateURL(artist, apiKey) {
    return `https://api.genius.com/search?q=${artist}&access_token=${apiKey}`;
}

async function getData(url){
    const response = await fetch(url);
    const data = await response.json();
    // console.log("Json data from API ", data);
    const songs = data.response.hits[0].result.title;
    console.log(songs);

    string.innerHTML = songs;
}



// const key = "RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu";
// const url = generateURL(searchArtist, key);


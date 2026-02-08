console.log("hello");

const url = "https://api.genius.com/artists/16775?access_token=RiaYeZfmiPKD8eLqWk3fwhslwxxaEhgMAuFFyNCthW-Nwgyw70E6rRcZV4lc3Zhu";


// console.log(url);

async function getData(){
    const response = await fetch(url);
    const data = await response.json();
    console.log("Json data from API ", data);

}

getData();
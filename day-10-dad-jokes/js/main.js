const joke = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


//getJoke();

// function getJoke() {
//     const headerConfig = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
    
//     fetch("https://icanhazdadjoke.com/", headerConfig)
//     .then((res) => res.json())
//     .then((data) => {joke.innerHTML = data.joke})   
// }

getJokeAsync();

async function getJokeAsync() { 
    const headerConfig = {
        headers: {
            Accept: 'application/json'
        }
    }

    const res = await fetch("https://icanhazdadjoke.com/", headerConfig);
    const data = await res.json();

    joke.innerHTML = data.joke;
}

jokeBtn.addEventListener('click', getJokeAsync);
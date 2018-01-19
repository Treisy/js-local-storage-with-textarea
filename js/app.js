// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners

eventListeners();

function eventListeners() {
    // Send Form
    document.querySelector('#formulario').addEventListener('submit', addTweet);

    // Delete Tweets
    listaTweets.addEventListener('click', deleteTweet);

    // DOM Content
    document.addEventListener("DOMContentLoaded", localStorageReady);
}

// Functions


// Add tweet from form
function addTweet(e) {
    e.preventDefault();

    // Read textarea
    const tweet = document.getElementById('tweet').value;

    // Create btnBorrar
    const btnBorrar = document.createElement('a');
    btnBorrar.classList = 'borrar-tweet';
    btnBorrar.innerText = 'X';

    // Create element and add content
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(btnBorrar);
    listaTweets.appendChild(li);

    // Add Local Storage
    addTweetLocalStorage(tweet);
}

function deleteTweet(e) {
    e.preventDefault();

    if(e.target.className === 'borrar-tweet') {
        console.log(e.target.parentElement.remove());
        alert('Tweet Deleted');
    }
}

function addTweetLocalStorage(tweet) {
    let tweets;

    tweets = getTweetsLocalStorage();

    // Add new tweet
    tweets.push(tweet);

    // Convert string to array for local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsLocalStorage() {
    let tweets;

    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}

function localStorageReady() {
    let tweets;

    tweets = getTweetsLocalStorage();

    tweets.forEach(function(tweet) {
        // Create btnBorrar
        const btnBorrar = document.createElement('a');
        btnBorrar.classList = 'borrar-tweet';
        btnBorrar.innerText = 'X';

        // Create element and add content
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(btnBorrar);
        listaTweets.appendChild(li);
    });
}
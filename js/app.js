// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners

eventListeners();

function eventListeners() {
    // Send Form
    document.querySelector('#formulario').addEventListener('submit', addTweet);

    // Delete Tweets
    listaTweets.addEventListener('click', deleteTweet);
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
}

function deleteTweet(e) {
    e.preventDefault();

    if(e.target.className === 'borrar-tweet') {
        console.log(e.target.parentElement.remove());
        alert('Tweet Deleted');
    }
}
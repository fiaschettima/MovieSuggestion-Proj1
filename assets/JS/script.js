
// function findyoutubeid(){
// var youtubeAPI = 'AIzaSyDEMdWu3lqGoSduYcL2p7LMJwCINR_eA0o'
// var youtubeSearchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='+movieName+'&videoEmbeddable=videoEmbeddableUnspecified&key='+ youtubeAPI;
// fetch(youtubeSearchUrl)
//     .then(function(response){
//         console.log(response)
//         return response.json();
// }).then(function(data){
//     console.log(data);
// })
// }
// findyoutubeid();

var userInput = document.getElementById("search-topic");
var topicTitle = document.getElementById("title-name");
var topicGenre = document.getElementById("genre-name");
var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkInput);

function checkInput() {
    
    console.log(userInput.value);
}


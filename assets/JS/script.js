
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
    var tmdbAPI = '07f3bf91adb1325ab2741c977ecdf895';
    var tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key=07f3bf91adb1325ab2741c977ecdf895&query=' + userInput.value + '&api_key=' + tmdbAPI;

    fetch(tmdbURL)
        .then(function(response){
            console.log(response)
            return response.json();
    }).then(function(data){
        console.log(data);
    })
}


  
// findyoutubeid();
//     console.log(userInput.value);
// }



function findyoutubeid(){
var youtubeAPI = 'AIzaSyDEMdWu3lqGoSduYcL2p7LMJwCINR_eA0o'
var youtubeSearchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='+movieName+'&videoEmbeddable=videoEmbeddableUnspecified&key='+ youtubeAPI;
fetch(youtubeSearchUrl)
    .then(function(response){
        console.log(response)
        return response.json();
}).then(function(data){
    console.log(data);
})
}
findyoutubeid();
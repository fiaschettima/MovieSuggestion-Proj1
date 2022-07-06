
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
        ///////////////////////////////////////////////////////////////
        for(i=0; i < 5; i++){
        var newRow = document.createElement('div'); // make row
        var rightSide = document.createElement('div'); // make col
        var movieCard = document.createElement('div');// make card
        var movieImgC = document.createElement('div');// image and title
        var movieContent = document.createElement('div');// card content
        var movieImg = document.createElement('img')// add image
        var movieTitle = document.createElement('span')// floating title in img
        var movieText = document.createElement('p')// text for movie
        rightSide.classList.add('col','s12','m3');
        newRow.classList.add('row')
        movieCard.classList.add('card')
        movieImgC.classList.add('card-image')
        movieImg.setAttribute('src', 'http://image.tmdb.org/t/p/w500/'+data.results[i].poster_path)+'.jpg'
        movieText.classList.add('card-content')
        movieTitle.classList.add('card-title')
        movieTitle.textContent = data.results[i].title
        movieText.textContent =  data.results[i].overview
        movieContent.appendChild(movieText)
        movieImgC.appendChild(movieImg)
        movieImgC.appendChild(movieTitle)
        movieCard.appendChild(movieImgC)
        movieCard.appendChild(movieContent)
        rightSide.appendChild(movieCard)
        newRow.appendChild(rightSide)
        console.log(newRow)
        var pageBody = document.getElementById('cardHere')
        pageBody.appendChild(newRow)
        }
    })
}
// https://api.themoviedb.org/3/movie/414906/similar?api_key=07f3bf91adb1325ab2741c977ecdf895&language=en-US&page=1
/* <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
   */
// findyoutubeid();
//     console.log(userInput.value);
// }


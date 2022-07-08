

var trailerVID = document.getElementById('trailerVID')
var userInput = document.getElementById("search-topic");
var topicTitle = document.getElementById("title-name");
var topicGenre = document.getElementById("genre-name");
var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkInput);
// submitBtn.addEventListener('click', findyoutubeid);

function checkInput() {
    var tmdbAPI = '07f3bf91adb1325ab2741c977ecdf895';
    var tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key=07f3bf91adb1325ab2741c977ecdf895&query=' + userInput.value + '&api_key=' + tmdbAPI;

    fetch(tmdbURL)
        .then(function(response){
            return response.json();
    }).then(function(data){
        console.log(data);
        ///////////////////////////////////////////////////////////////
        var pageBody = document.getElementById('cardHere')
        pageBody.innerHTML = "";
        for(i=0; i < 6; i++){
   
        var testCard = document.createElement('div');
        var testCardImgCon = document.createElement('div');
        var testImage = document.createElement('img');
        var testContentCont = document.createElement('div');
        var testSpan = document.createElement('span');
        var testPar = document.createElement('p');
        var testAnch = document.createElement('button');
        var testDivreveal = document.createElement('div');
        var testSpanRevTitle = document.createElement('span');
        var closeRev = document.createElement('i');
        var OpenRev = document.createElement('i');
        var revPara = document.createElement('p');
        testCard.classList.add('card','col','s12','m6', 'l4', 'xl3');
        testCardImgCon.classList.add('card-image', 'waves-effect', 'waves-block', 'waves-light');
        testImage.classList.add('activator');
        testContentCont.classList.add('card-content');
        testSpan.classList.add('card-title', 'activator','grey-text', 'text-darken-4');
        testDivreveal.classList.add('card-reveal');
        testSpanRevTitle.classList.add('card-title','grey-text', 'text-darken-4');
        closeRev.classList.add('material-icons', 'right');
        closeRev.textContent = 'close';
        OpenRev.classList.add('material-icons', 'right');
        OpenRev.textContent = 'more_vert';
        testImage.setAttribute('src', 'http://image.tmdb.org/t/p/w342/'+data.results[i].poster_path)+'.jpg';
        testAnch.setAttribute('data-ytSearch', data.results[i].title);
        testSpan.textContent = data.results[i].title;
        testAnch.setAttribute('data-target', 'trailer');
        // testAnch.setAttribute('href', '#trailer')
        testAnch.classList.add('waves-effect','btn', 'waves-light', 'modal-trigger', 'findtrailer');
        testAnch.textContent = 'Watch The Trailer';
        testSpanRevTitle.textContent = data.results[i].title;
        revPara.textContent = data.results[i].overview;
        testCardImgCon.appendChild(testImage);
        testSpan.appendChild(OpenRev);
        testContentCont.appendChild(testSpan);
        testPar.appendChild(testAnch);
        testContentCont.appendChild(testPar);
        testSpanRevTitle.appendChild(closeRev);
        testDivreveal.appendChild(testSpanRevTitle);
        testDivreveal.appendChild(revPara);
        testCard.appendChild(testCardImgCon);
        testCard.appendChild(testContentCont);
        testCard.appendChild(testDivreveal);
        pageBody.appendChild(testCard);
        (function() {
          testAnch.addEventListener('click', function(e) {
            findyoutubeid(e.target.dataset.ytsearch)
            console.log(e.target.dataset.ytsearch)
          })
        })(i)

        }
        
        // console.log(trailerButton[0].dataset.ytsearch)
    })
}
// var trailerButton = document.getElementsByClassName('findtrailer')
// trailerButton.addEventListener('click', findyoutubeid)
function findyoutubeid(looking){
  var youtubeAPI = 'AIzaSyDEMdWu3lqGoSduYcL2p7LMJwCINR_eA0o'
  var youtubeSearchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='+ looking +'trailer&videoEmbeddable=videoEmbeddableUnspecified&key='+ youtubeAPI;
  fetch(youtubeSearchUrl)
      .then(function(response){
          return response.json();
  }).then(function(data){
      console.log(data);
      trailerVID.setAttribute('src', '')
      trailerVID.setAttribute('src', 'https://www.youtube.com/embed/'+ data.items[0].id.videoId)
      console.log(data.items[0].id.videoId)
  })
  }

// console.log(trailerButton)
// trailerButton.addEventListener('click', function(event){
//   console.log(event.target)
// })
// https://api.themoviedb.org/3/movie/414906/similar?api_key=07f3bf91adb1325ab2741c977ecdf895&language=en-US&page=1


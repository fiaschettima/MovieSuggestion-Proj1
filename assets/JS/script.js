

var trailerVID = document.getElementById('trailerVID')
var userInput = document.getElementById("search-topic");
var topicTitle = document.getElementById("title-name");
var topicGenre = document.getElementById("genre-name");
var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkInput);
// submitBtn.addEventListener('click', findyoutubeid);

function checkInput() {
    var tmdbAPI = '07f3bf91adb1325ab2741c977ecdf895';
    var tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key='+tmdbAPI+'&query=' + userInput.value;

    fetch(tmdbURL)
        .then(function(response){
            return response.json();
    }).then(function(data){
        console.log(data);
        ///////////////////////////////////////////////////////////////
        var pageBody = document.getElementById('cardHere')
        pageBody.innerHTML = "";
        for(i=0; i < data.results.length; i++){
          if(data.results[i].poster_path === null){
            console.log('No poster')
          }else{
        var testCard = document.createElement('div');
        var testCardImgCon = document.createElement('div');
        var testImage = document.createElement('img');
        var testContentCont = document.createElement('div');
        var testSpan = document.createElement('span');
        var testPar = document.createElement('p');
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
        var testAnch = document.createElement('a');
        testSpan.textContent = data.results[i].title;
        testAnch.setAttribute('href', '#trailer');
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
            // findyoutubeid(e.target.dataset.ytsearch)
            console.log(e.target.dataset.ytsearch)
          })
        })(i)

        }
      }
        // console.log(trailerButton[0].dataset.ytsearch)
    })
}
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.modal');
//   var instances = M.Modal.init(elems);
//   instances.open();
// });
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

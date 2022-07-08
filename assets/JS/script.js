
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
        var pageBody = document.getElementById('cardHere')
        pageBody.innerHTML = "";
        for(i=0; i < 6; i++){
        // var newRow = document.createElement('div'); // make row
        // var rightSide = document.createElement('div'); // make col
        // var movieCard = document.createElement('div');// make card-----
        // var movieImgC = document.createElement('div');// image and title------
        // var movieContent = document.createElement('div');// card content---
        // var movieImg = document.createElement('img')// add image
        // var movieTitle = document.createElement('span')// floating title in img
        // var movieText = document.createElement('p')// text for movie
        // rightSide.classList.add('col','s12','m6', 'l4', 'hoverable');
        // // newRow.classList.add('row')
        // movieCard.classList.add('card')
        // movieImgC.classList.add('card-image')
        // movieImg.setAttribute('src', 'http://image.tmdb.org/t/p/w500/'+data.results[i].poster_path)+'.jpg'
        // movieText.classList.add('card-content')
        // movieTitle.classList.add('card-title')
        // movieTitle.textContent = data.results[i].title
        // movieText.textContent =  data.results[i].overview
        // movieContent.appendChild(movieText)
        // movieImgC.appendChild(movieImg)
        // movieImgC.appendChild(movieTitle)
        // movieCard.appendChild(movieImgC)
        // movieCard.appendChild(movieContent)
        // rightSide.appendChild(movieCard)
      
        // pageBody.appendChild(rightSide)

        var testCard = document.createElement('div')
        var testCardImgCon = document.createElement('div')
        var testImage = document.createElement('img')
        var testContentCont = document.createElement('div')
        var testSpan = document.createElement('span')
        var testPar = document.createElement('p')
        var testAnch = document.createElement('a')
        var testDivreveal = document.createElement('div')
        var testSpanRevTitle = document.createElement('span')
        var closeRev = document.createElement('i')
        var OpenRev = document.createElement('i')
        var revPara = document.createElement('p')
        var testBtn = document.createElement('button')
        testCard.classList.add('card','col','s12','m6', 'l4', 'xl3')
        testCardImgCon.classList.add('card-image', 'waves-effect', 'waves-block', 'waves-light')
        testImage.classList.add('activator')
        testContentCont.classList.add('card-content')
        testSpan.classList.add('card-title', 'activator','grey-text', 'text-darken-4')
        testDivreveal.classList.add('card-reveal')
        testSpanRevTitle.classList.add('card-title','grey-text', 'text-darken-4')
        closeRev.classList.add('material-icons', 'right')
        closeRev.textContent = 'close'
        OpenRev.classList.add('material-icons', 'right')
        OpenRev.textContent = 'more_vert'
        testImage.setAttribute('src', 'http://image.tmdb.org/t/p/w342/'+data.results[i].poster_path)+'.jpg'
        testSpan.textContent = data.results[i].title
        testAnch.setAttribute('href', 'https://materializecss.com/cards.html')
        testAnch.textContent = 'Test Link'
        testBtn.textContent = 'Find Similar Movies'
        testBtn.classList.add('waves-effect', 'waves-light', 'btn', 'similar-btn')
        testBtn.setAttribute('data-title', data.results[i].title)
        testSpanRevTitle.textContent = data.results[i].title
        revPara.textContent = data.results[i].overview
        testCardImgCon.appendChild(testImage)
        testSpan.appendChild(OpenRev)
        testContentCont.appendChild(testSpan)
        testPar.appendChild(testAnch)
        testContentCont.appendChild(testPar)
        testContentCont.appendChild(testBtn)
        testSpanRevTitle.appendChild(closeRev)
        testDivreveal.appendChild(testSpanRevTitle)
        testDivreveal.appendChild(revPara)
        testCard.appendChild(testCardImgCon)
        testCard.appendChild(testContentCont)
        testCard.appendChild(testDivreveal)
        pageBody.appendChild(testCard);
        (function() {
          testBtn.addEventListener('click', function(e) {
            var movTitle = e.path[0].dataset.title;
            // transfer(movTitle);
            console.log(movTitle);
            
          })
        })(i)
        
        }
    
    })
}
export {checkInput};

// addEventListener('click', function(event){
  
//   if(event.target == 'button') {
//     console.log(event.target.data-title)

//   } else {
//     return
//   }
  
//   // console.log(data.results[this].title)
//     // console.log(event.target.parentElement.parentElement.childNodes.);
//     // event.target.parentElement.parentElement.childNodes[0].textContent.trim()
// })


// https://api.themoviedb.org/3/movie/414906/similar?api_key=07f3bf91adb1325ab2741c977ecdf895&language=en-US&page=1
/* <div class="card">
<div class="card-image waves-effect waves-block waves-light">
  <img class="activator" src="images/office.jpg">
</div>
<div class="card-content">
  <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
  <p><a href="#">This is a link</a></p>
</div>
<div class="card-reveal">
  <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
  <p>Here is some more information about this product that is only revealed once clicked on.</p>
</div>
</div> */

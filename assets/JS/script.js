


var userInput = document.getElementById("search-topic");
var topicTitle = document.getElementById("title-name");
var topicGenre = document.getElementById("genre-name");
var submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkInput);

function checkInput() {
    var tmdbAPI = '07f3bf91adb1325ab2741c977ecdf895';
    var tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key=07f3bf91adb1325ab2741c977ecdf895&query=' + userInput.value;

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
          testBtn.setAttribute('data-title', data.results[i].id)
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

              console.log(movTitle);
              findSimilar(movTitle);
    
            })
          })(i)
        
        }
    
    })
}

function findSimilar(movieTitle){
  console.log(movieTitle);
  var tmdbAPI = '07f3bf91adb1325ab2741c977ecdf895';
  var similarURL = 'https://api.themoviedb.org/3/movie/' + movieTitle + '/similar?api_key=' + tmdbAPI + '&language=en-US&page=1';
  fetch(similarURL)
        .then(function(response){
            return response.json();
    }).then(function(data) {
      console.log(data);
      var pageBody = document.getElementById('cardHere')
        pageBody.innerHTML = "";
        for(i=0; i < 6; i++){
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
          testBtn.setAttribute('data-title', data.results[i].id)
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

              console.log(movTitle);
              findSimilar(movTitle);
    
            })
          })(i)
        }
    })
}



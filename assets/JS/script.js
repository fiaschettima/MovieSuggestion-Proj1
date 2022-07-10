var userInput = document.getElementById("search-topic");
var topicTitle = document.getElementById("title-name");
var topicGenre = document.getElementById("genre-name");
var submitBtn = document.getElementById("submit-btn");
var tmdbAPI = '07f3bf91adb1325ab2741c977ecdf895';

// New variable to check the radio buttons
var radioBtns = document.getElementsByName("group1");
// Variable to store the number values for each genre for the API -- not currently in use but present in case
// someone comes up with a cleaner way to switch user input value that isn't making a long conditional
var genreNumbers = [
  {  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  scifi: 878,
  thriller: 53,
  war: 10752,
  western: 37}
];
var modalsidk = document.getElementById(modal1);
// Event Listenrs
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  instances.open();
});

submitBtn.addEventListener('click', function (){
  if (!userInput.value) {
    userInput.value = "Please add a movie title or genre name";
  } else {checkInput();}
});


function checkInput() {
    var tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key='+tmdbAPI+'&query=' + userInput.value;

  // Checks if the title button is checked and runs the regular url if so
  if (radioBtns[0].checked) {
    console.log("title is selected");
    var tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key=07f3bf91adb1325ab2741c977ecdf895&query=' + userInput.value + '&api_key=' + tmdbAPI;
  
    fetch(tmdbURL)
        .then(function(response){
            console.log(response)
            return response.json();
    }).then(function(data){
        console.log(data);

        // Checks if there was anything returned -- if not, changes text to inform the user
        if (data.results.length == 0) {
          userInput.value = "No results found";
          return;
        }
        else {
        ///////////////////////////////////////////////////////////////
        var pageBody = document.getElementById('cardHere')
        pageBody.innerHTML = "";
        for(i=0; i < data.results.length; i++){
          if(data.results[i].poster_path === null){
            console.log('No poster')
          }else{
        var testCard = document.createElement('div')
        var testCardImgCon = document.createElement('div')
        var testImage = document.createElement('img')
        var testContentCont = document.createElement('div')
        var testSpan = document.createElement('span')
        var testPar = document.createElement('p')
        // var testAnch = document.createElement('a')
        var testDivreveal = document.createElement('div')
        var testSpanRevTitle = document.createElement('span')
        var closeRev = document.createElement('i')
        var OpenRev = document.createElement('i')
        var revPara = document.createElement('p')
        var favoriteIcon = document.createElement('i')
        favoriteIcon.textContent = '☆';
        favoriteIcon.classList.add('right', 'notLiked')
        testCard.classList.add('card','col', 's12','m6', 'l4', 'xl3')
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
        // testAnch.setAttribute('href', 'https://materializecss.com/cards.html')
        // testAnch.textContent = 'Test Link'
        testSpanRevTitle.textContent = data.results[i].title
        revPara.textContent = data.results[i].overview
        var testAnch = document.createElement('a');
        var testBtn = document.createElement('button');
        testBtn.textContent = 'Find Similar Movies'
        testBtn.classList.add('waves-effect', 'waves-light', 'btn', 'similar-btn')
        testBtn.setAttribute('data-title', data.results[i].id)
        testAnch.setAttribute('href', '#modal1');
        testAnch.setAttribute('data-ytsearch', data.results[i].title);
        testAnch.classList.add('waves-effect','btn', 'waves-light', 'modal-trigger', 'findtrailer');
        testAnch.textContent = 'Watch The Trailer';
        testCardImgCon.appendChild(testImage)
        testSpan.appendChild(OpenRev)
        testContentCont.appendChild(testSpan)
        testPar.appendChild(testAnch)
        testPar.appendChild(favoriteIcon)
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
          testAnch.addEventListener('click', function(e){
            findyoutubeid(e.target.dataset.ytsearch)
            console.log(e.target.dataset.ytsearch) })
            // 
            testBtn.addEventListener('click', function(e) {
              var movTitle = e.path[0].dataset.title;
              console.log(movTitle);
              findSimilar(movTitle);})
         
        })(i)
        }}
        }
    })
        
}
    
  // Checks if the genre button is checked and runs the genre url if so
else if (radioBtns[1].checked) {
  console.log("genre is selected");

  // Convert user input to lowercase to avoid case issues
  userInput.value=userInput.value.toLowerCase();

  // Need to check userInput.value against our object genreNumbers --> if they match, set userInput.value to the corresponding
  // pair's value
  // If there is no input in the form, ask the user to first put something
  if (!userInput.value) {
    console.log("Please put in a genre to search");
    // var 
  }

  // If the genre name provides an acceptable url, display movies in that genre
  else {

    if (userInput.value == 'action') {
      userInput.value = 28;
      runGenre();
    } else if (userInput.value == 'adventure') {
      userInput.value = 12; 
      runGenre();
    } else if (userInput.value == 'animation') {
      userInput.value = 16;
      runGenre(); 
    } else if (userInput.value == 'comedy') {
      userInput.value = 35; 
      runGenre();
    } else if (userInput.value == 'crime') {
      userInput.value = 80; 
      runGenre();
    } else if (userInput.value == 'documentary') {
      userInput.value = 99;
      runGenre();
    } else if (userInput.value == 'drama') {
      userInput.value = 18; 
      runGenre();
    } else if (userInput.value == 'family') {
      userInput.value = 10751; 
      runGenre();
    } else if (userInput.value == 'fantasy') {
      userInput.value = 14; 
      runGenre();
    } else if (userInput.value == 'history') {
      userInput.value = 36; 
      runGenre();
    } else if (userInput.value == 'horror') {
      userInput.value = 27; 
      runGenre();
    } else if (userInput.value == 'music') {
      userInput.value = 10402; 
      runGenre();
    } else if (userInput.value == 'mystery') {
      userInput.value = 9648; 
      runGenre();
    } else if (userInput.value == 'romance') {
      userInput.value = 10749; 
      runGenre();
    } else if (userInput.value == 'scifi') {
      userInput.value = 878; 
      runGenre();
    } else if (userInput.value == 'thriller') {
      userInput.value = 53; 
      runGenre();
    } else if (userInput.value == 'war') {
      userInput.value = 10752; 
      runGenre();
    } else if (userInput.value == 'western') {
      userInput.value = 37; 
      runGenre();
    } else {
      userInput.value = "Invalid entry, try again";
      console.log("Please check spelling");
    }
  }
}}

function runGenre (){
  var tmdbGenreURL = 'https://api.themoviedb.org/3/discover/movie?api_key=' + tmdbAPI + '&with_genres=' + userInput.value;

  fetch(tmdbGenreURL)
      .then(function(response){
          console.log(response)
          return response.json();
  }).then(function(data){
      console.log(data);
      
      ///////////////////////////////////////////////////////////////
      var pageBody = document.getElementById('cardHere')
      pageBody.innerHTML = "";
      for(i=0; i < data.results.length; i++){
        if (data.results.length == 0) {
          userInput.value = "No results found";
          return;
        }
        else {
      var testCard = document.createElement('div')
      var testCardImgCon = document.createElement('div')
      var testImage = document.createElement('img')
      var testContentCont = document.createElement('div')
      var testSpan = document.createElement('span')
      var testPar = document.createElement('p')
      // var testAnch = document.createElement('a')
      var testDivreveal = document.createElement('div')
      var testSpanRevTitle = document.createElement('span')
      var closeRev = document.createElement('i')
      var OpenRev = document.createElement('i')
      var revPara = document.createElement('p')
      testCard.classList.add('card','col', 's12','m6', 'l4', 'xl3')
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
      // testAnch.setAttribute('href', 'https://materializecss.com/cards.html')
      // testAnch.textContent = 'Test Link'
      testSpanRevTitle.textContent = data.results[i].title
      revPara.textContent = data.results[i].overview
      var testAnch = document.createElement('a');
      var testBtn = document.createElement('button');
      testBtn.textContent = 'Find Similar Movies'
      testBtn.classList.add('waves-effect', 'waves-light', 'btn', 'similar-btn')
      testBtn.setAttribute('data-title', data.results[i].id)
      testAnch.setAttribute('href', '#modal1');
      testAnch.setAttribute('data-ytsearch', data.results[i].title);
      testAnch.classList.add('waves-effect','btn', 'waves-light', 'modal-trigger', 'findtrailer');
      testAnch.textContent = 'Watch The Trailer';
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
        testAnch.addEventListener('click', function(e){
          findyoutubeid(e.target.dataset.ytsearch)
          console.log(e.target.dataset.ytsearch) })
          // 
          testBtn.addEventListener('click', function(e) {
            var movTitle = e.path[0].dataset.title;
            console.log(movTitle);
            findSimilar(movTitle);})
       
      })(i)
      }}
      })
  }

     

function findSimilar(movieTitle){
  console.log(movieTitle);
  var similarURL = 'https://api.themoviedb.org/3/movie/' + movieTitle + '/similar?api_key=' + tmdbAPI + '&language=en-US&page=1';
  fetch(similarURL)
        .then(function(response){
            return response.json();
    }).then(function(data) {
      console.log(data);
      var pageBody = document.getElementById('cardHere')
      pageBody.innerHTML = "";
      for(i=0; i < data.results.length; i++){
        if (data.results.length == 0) {
          userInput.value = "No results found";
          return;
        }
        else {
      var testCard = document.createElement('div')
      var testCardImgCon = document.createElement('div')
      var testImage = document.createElement('img')
      var testContentCont = document.createElement('div')
      var testSpan = document.createElement('span')
      var testPar = document.createElement('p')
      // var testAnch = document.createElement('a')
      var testDivreveal = document.createElement('div')
      var testSpanRevTitle = document.createElement('span')
      var closeRev = document.createElement('i')
      var OpenRev = document.createElement('i')
      var revPara = document.createElement('p')
      testCard.classList.add('card','col', 's12','m6', 'l4', 'xl3')
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
      // testAnch.setAttribute('href', 'https://materializecss.com/cards.html')
      // testAnch.textContent = 'Test Link'
      testSpanRevTitle.textContent = data.results[i].title
      revPara.textContent = data.results[i].overview
      var testAnch = document.createElement('a');
      var testBtn = document.createElement('button');
      testBtn.textContent = 'Find Similar Movies'
      testBtn.classList.add('waves-effect', 'waves-light', 'btn', 'similar-btn')
      testBtn.setAttribute('data-title', data.results[i].id)
      testAnch.setAttribute('href', '#modal1');
      testAnch.setAttribute('data-ytsearch', data.results[i].title);
      testAnch.classList.add('waves-effect','btn', 'waves-light', 'modal-trigger', 'findtrailer');
      testAnch.textContent = 'Watch The Trailer';
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
        testAnch.addEventListener('click', function(e){
          findyoutubeid(e.target.dataset.ytsearch)
          console.log('e.target.dataset.ytsearch' )
          console.log(e) 
        })
          // 
          testBtn.addEventListener('click', function(e) {
            var movTitle = e.path[0].dataset.title;
            console.log(movTitle);
            findSimilar(movTitle);})
       
      })(i)
      }}
      })
  }

     


var trailerVID = document.getElementById('trailerVID')
function findyoutubeid(looking){
  var youtubeAPI = 'AIzaSyDEMdWu3lqGoSduYcL2p7LMJwCINR_eA0o'
  var youtubeSearchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=%27' + looking + 'trailer&videoEmbeddable=videoEmbeddableUnspecified&key='+ youtubeAPI;
  console.log(youtubeSearchUrl)
  fetch(youtubeSearchUrl)
      .then(function(response){
          return response.json();
  }).then(function(data){
    console.log('//////////////////////////////////////////////////////////');
      console.log(data);
      trailerVID.setAttribute('src', '')
      trailerVID.setAttribute('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
      console.log(data.items[0].id.videoId)
  })
  }

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

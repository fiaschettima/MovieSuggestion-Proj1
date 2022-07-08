
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

// New variable to check the radio buttons
var radioBtns = document.getElementsByName("group1");

// Variable to store the number values for each genre for the API
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
  // tvmovie: 10770, do we need this. what is a tv movie AND its two words (rude)
  thriller: 53,
  war: 10752,
  western: 37}
];

submitBtn.addEventListener('click', checkInput);


function checkInput() {

  // Separated TMDB API key out because it is needed for both urls
  var tmdbAPI = '07f3bf91adb1325ab2741c977ecdf895';

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
        testAnch.setAttribute('href', 'https://materializecss.com/cards.html')
        testAnch.textContent = 'Test Link'
        testSpanRevTitle.textContent = data.results[i].title
        revPara.textContent = data.results[i].overview
        testCardImgCon.appendChild(testImage)
        testSpan.appendChild(OpenRev)
        testContentCont.appendChild(testSpan)
        testPar.appendChild(testAnch)
        testContentCont.appendChild(testPar)
        testSpanRevTitle.appendChild(closeRev)
        testDivreveal.appendChild(testSpanRevTitle)
        testDivreveal.appendChild(revPara)
        testCard.appendChild(testCardImgCon)
        testCard.appendChild(testContentCont)
        testCard.appendChild(testDivreveal)
        pageBody.appendChild(testCard)

        }
    })

// Checks if the genre button is checked and runs the genre url if so
} else if (radioBtns[1].checked) {
  console.log("genre is selected");

  // Convert user input to lowercase to avoid case issues
  userInput.value=userInput.value.toLowerCase();

  // Need to check userInput.value against our object genreNumbers --> if they match, set userInput.value to the corresponding
  // pair's value
  var tmdbGenreURL = 'https://api.themoviedb.org/3/discover/movie?api_key=' + tmdbAPI + '&with_genres=' + userInput.value;

  // If there is no input in the form, ask the user to first put something
  if (!userInput.value) {
    console.log("Please put in a genre to search");
  }

  // If the genre name provides an acceptable url, display movies in that genre
  else if (response.ok == true) {

    if (userInput.value == 'action') {
      userInput.value = 28;
    } else if (userInput.value == 'adventure') {
      userInput.value = 12; 
    } else if (userInput.value == 'animation') {
      userInput.value = 16; 
    } else if (userInput.value == 'comedy') {
      userInput.value = 35; 
    } else if (userInput.value == 'crime') {
      userInput.value = 80; 
    } else if (userInput.value == 'documentary') {
      userInput.value = 99; 
    } else if (userInput.value == 'drama') {
      userInput.value = 18; 
    } else if (userInput.value == 'family') {
      userInput.value = 10751; 
    } else if (userInput.value == 'fantasy') {
      userInput.value = 14; 
    } else if (userInput.value == 'history') {
      userInput.value = 36; 
    } else if (userInput.value == 'horror') {
      userInput.value = 27; 
    } else if (userInput.value == 'music') {
      userInput.value = 10402; 
    } else if (userInput.value == 'mystery') {
      userInput.value = 9648; 
    } else if (userInput.value == 'romance') {
      userInput.value = 10749; 
    } else if (userInput.value == 'scifi') {
      userInput.value = 878; 
    } else if (userInput.value == 'thriller') {
      userInput.value = 53; 
    } else if (userInput.value == 'war') {
      userInput.value = 10752; 
    } else if (userInput.value == 'western') {
      userInput.value = 37; 
    }

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
        testAnch.setAttribute('href', 'https://materializecss.com/cards.html')
        testAnch.textContent = 'Test Link'
        testSpanRevTitle.textContent = data.results[i].title
        revPara.textContent = data.results[i].overview
        testCardImgCon.appendChild(testImage)
        testSpan.appendChild(OpenRev)
        testContentCont.appendChild(testSpan)
        testPar.appendChild(testAnch)
        testContentCont.appendChild(testPar)
        testSpanRevTitle.appendChild(closeRev)
        testDivreveal.appendChild(testSpanRevTitle)
        testDivreveal.appendChild(revPara)
        testCard.appendChild(testCardImgCon)
        testCard.appendChild(testContentCont)
        testCard.appendChild(testDivreveal)
        pageBody.appendChild(testCard)

        }
    })

    // If there is input but it provides a bad url, ask the user to check spelling and note that the genres are limited
  } else if (genreNumbers.indexOf(userInput.value) === -1) {
    console.log("fix ur search input!!");
    // create modal that says
    // "Input not valid, please check that genre name is spelled correctly -- please note that some genres are not supported"
  }
}}

// if (genreNumbers.indexOf(userInput.value)) --> userInput.value = w/e that key value is

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

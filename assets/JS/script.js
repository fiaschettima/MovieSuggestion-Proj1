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
// Event Listeners this one being for modal trigger
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  instances.open();
});
// event listener for submit fiels on enter or click of button
submitBtn.addEventListener('click', function (){
  if (!userInput.value) {
    userInput.placeholder = "Please add a movie title or Genre";
  } else {checkInput();}
});
userInput.addEventListener('keyup', function(e){
  if(e.code === 'Enter' && userInput.value !== ''){
      e.preventDefault;
      checkInput();
      userInput.value = "";
  }else{
      return;
  }
})
// function used to print cards checks of returned data from response is 0 before printing
function printCards(data){
  if (data.results.length == 0) {
    userInput.value = "No results found";
    return;
  }
  else {
// if results are found runs this functuib creating the cards
  var pageBody = document.getElementById('cardHere')
  // clear out the cards prior to adding them so new results appear at the top
  pageBody.innerHTML = "";
  // iterates over all results given by API checks if the result at the index has poster first
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
  var testDivreveal = document.createElement('div')
  var testSpanRevTitle = document.createElement('span')
  var closeRev = document.createElement('i')
  var OpenRev = document.createElement('i')
  var revPara = document.createElement('p')
  var testAnch = document.createElement('a');
  var testBtn = document.createElement('a');
  var likeBtn = document.createElement('a');
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
  testSpanRevTitle.textContent = data.results[i].title
  revPara.textContent = data.results[i].overview
  likeBtn.classList.add('btn', 'waves-effect','waves-light','favBtn', 'right','fa', 'fa-star')
  likeBtn.setAttribute('data-id', data.results[i].id)
  likeBtn.setAttribute('data-name', data.results[i].title)
  testBtn.textContent = 'Find Similar Movies'
  testBtn.classList.add('waves-effect', 'waves-light', 'btn', 'similar-btn', 'sizeMe')
  testBtn.setAttribute('data-title', data.results[i].id)
  testAnch.setAttribute('href', '#modal1');
  testAnch.setAttribute('data-ytsearch', data.results[i].title);
  testAnch.classList.add('waves-effect','btn', 'waves-light', 'modal-trigger', 'findtrailer', 'sizeMe');
  testAnch.textContent = 'Watch The Trailer';
  testCardImgCon.appendChild(testImage)
  testSpan.appendChild(OpenRev)
  testContentCont.appendChild(testSpan)
  testPar.appendChild(testAnch)
  testPar.appendChild(likeBtn)
  testPar.appendChild(testBtn)
  testContentCont.appendChild(testPar)
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
      // above event listener for each youtube or trailer button
      testBtn.addEventListener('click', function(e) {
        var movTitle = e.path[0].dataset.title;
        console.log(movTitle);
        findSimilar(movTitle);})
      // above event listener for finding similar movies button
      likeBtn.addEventListener('click', function(e){
        e.target.classList.toggle('like');
        checkLikes(e.target)
      // above event listener for local storage or like button
      })
   
  })(i)
  }}
  }
}

// API call to search for a movie based on movie title input
function checkInput() {
    var tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key='+tmdbAPI+'&query=' + userInput.value;

  // Checks if the title button is checked and runs the regular url if so
  if (radioBtns[0].checked) {
    console.log("title is selected");
    var tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key=07f3bf91adb1325ab2741c977ecdf895&query=' + userInput.value + '&api_key=' + tmdbAPI;
  
    fetch(tmdbURL)
        .then(function(response){
            return response.json();
    }).then(function(data){
        printCards(data) 
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
  }
  // If the genre name provides an acceptable url, display movies in that genre
  else {
// check input for any of these matching values and then set searchValue to the genres id which is then used in the fetch url
    if (userInput.value == 'action') {
      searchValue = 28;
      runGenre();
      return
    } else if (userInput.value == 'adventure') {
      searchValue = 12; 
      runGenre();
      return
    } else if (userInput.value == 'animation') {
      searchValue = 16;
      runGenre(); 
      return
    } else if (userInput.value == 'comedy') {
      searchValue = 35; 
      runGenre();
      return
    } else if (userInput.value == 'crime') {
      searchValue = 80; 
      runGenre();
      return
    } else if (userInput.value == 'documentary') {
      searchValue = 99;
      runGenre();
      return
    } else if (userInput.value == 'drama') {
      searchValue = 18; 
      runGenre();
      return
    } else if (userInput.value == 'family') {
      searchValue = 10751; 
      runGenre();
      return
    } else if (userInput.value == 'fantasy') {
      searchValue = 14; 
      runGenre();
      return
    } else if (userInput.value == 'history') {
      searchValue = 36; 
      runGenre();
      return
    } else if (userInput.value == 'horror') {
      searchValue = 27; 
      runGenre();
      return
    } else if (userInput.value == 'music') {
      userInput.value = 10402; 
      runGenre();
      return
    } else if (userInput.value == 'mystery') {
      searchValue = 9648; 
      runGenre();
      return
    } else if (userInput.value == 'romance') {
      userInput.value = 10749; 
      runGenre();
      return
    } else if (userInput.value == 'scifi') {
      searchValue = 878; 
      runGenre();
      return
    } else if (userInput.value == 'thriller') {
      searchValue = 53; 
      runGenre();
      return
    } else if (userInput.value == 'war') {
      searchValue = 10752; 
      runGenre();
      return
    } else if (userInput.value == 'western') {
      searchValue = 37; 
      runGenre();
      return
    } else {
      userInput.value = '';
      userInput.placeholder = "Invalid entry, try again";
      console.log("Please check spelling");
    }
  }
}}
// fetch request for searching based on genre
function runGenre (){
  var tmdbGenreURL = 'https://api.themoviedb.org/3/discover/movie?api_key=' + tmdbAPI + '&with_genres=' + searchValue;

  fetch(tmdbGenreURL)
      .then(function(response){
          return response.json();
  }).then(function(data){
      printCards(data);
      })
  }

     
// fetch request for finding movie similar to the movie where the button is being pressed
function findSimilar(movieTitle){
  var similarURL = 'https://api.themoviedb.org/3/movie/' + movieTitle + '/similar?api_key=' + tmdbAPI + '&language=en-US&page=1';
  fetch(similarURL)
        .then(function(response){
            return response.json();
    }).then(function(data) {
      printCards(data);
  })}

  //  Function to find youtube video using youtbue API given the title of the movie being selected
var trailerVID = document.getElementById('trailerVID')
function findyoutubeid(looking){
  var youtubeAPI = 'AIzaSyDEMdWu3lqGoSduYcL2p7LMJwCINR_eA0o'
  // this youtube URL doesn not yield perfect results point of improvement for future use, this is because if the title is not specific it will find the most popular result first
  // as an example we tested Thor if watch movie is pressed on thor, thor love and thunder trailer is what shows up
  var youtubeSearchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=%27' + looking + 'trailer&videoEmbeddable=videoEmbeddableUnspecified&key='+ youtubeAPI;
  
  fetch(youtubeSearchUrl)
      .then(function(response){
          return response.json();
  }).then(function(data){
    // clear out previouse src attribute and set to new returned YT video
      trailerVID.setAttribute('src', '')
      trailerVID.setAttribute('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
  })
  }
 
// function to add movie to local storage and be saved to favorites page
function checkLikes(e){
  var idStorage = [];
  // checks if the target like buttons has a class of like if yes add to local storage(class is being toggled in the event listenr) if no removes item
    if(e.classList.contains('like')){
      idStorage.push(e.dataset.id);
      localStorage.setItem(e.dataset.name, e.dataset.id)
    }else{
     localStorage.removeItem(e.dataset.name, e.dataset.id)
    }

}

var movieIds = [];

function forEachKey() {
    for (var i = 0; i < localStorage.length; i++) {
        movieIds.push(localStorage.getItem(localStorage.key(i)));
        //console.log(localStorage.getItem(localStorage.key(i)));
        
    }
    movieIds.forEach(printFavorites);
}
forEachKey();


function printFavorites (titleId) {
    
    console.log(titleId);
    var tmdbAPI = '07f3bf91adb1325ab2741c977ecdf895';
    var tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key=07f3bf91adb1325ab2741c977ecdf895&query=' + titleId+ '&api_key=' + tmdbAPI;
    fetch(tmdbURL)
        .then(function(response){
            console.log(response)
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
          var testBtn = document.createElement('a');
          var likeBtn = document.createElement('a')
          likeBtn.classList.add('btn', 'waves-effect','waves-light','favBtn', 'right','fa', 'fa-star')
          likeBtn.setAttribute('data-id', data.results[i].id)
          likeBtn.setAttribute('data-name', data.results[i].title)
          // likeBtn.appendChild(starI)
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
          testContentCont.appendChild(testPar)
          testPar.appendChild(testBtn)
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
              //
              likeBtn.addEventListener('click', function(e){
                e.target.classList.toggle('like');
                checkLikes(e.target)
                // console.log(e.target) 
              })
           
          })(i)
          }}
          
        
    })

}
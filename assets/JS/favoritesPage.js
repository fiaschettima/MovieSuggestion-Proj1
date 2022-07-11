var movieIds = [];

function forEachKey() {
    for (var i = 0; i < localStorage.length; i++) {
        movieIds.push(localStorage.getItem(localStorage.key(i)));
        //console.log(localStorage.getItem(localStorage.key(i)));
        
    }
    // 
}
forEachKey();
// console.log(movieIds);
printFavorites(movieIds)
function printFavorites (titleId) {
    var pageBody = document.getElementById('cardHere')
    pageBody.innerHTML = "";
    console.log(titleId);
    // console.log(tmdbAPI);
    for (var i = 0; i < titleId.length; i++) {
    // var tmdbAPI = '07f3bf91adb1325ab2741c977ecdf895';
        var tmdbURL = 'https://api.themoviedb.org/3/movie/' + titleId[i] + '?api_key=' + tmdbAPI + '&language=en-US';
        // var tmdbGenreURL = 'https://api.themoviedb.org/3/discover/movie?api_key=' + tmdbAPI + '&with_genres=' + 'action';
        fetch(tmdbURL)
            .then(function(response){
                // console.log(response)
                return response.json();
        }).then(function(data){
            console.log(data);
            
        
            ///////////////////////////////////////////////////////////////
            
            
    
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
            testImage.setAttribute('src', 'http://image.tmdb.org/t/p/w342/'+data.poster_path)+'.jpg'
            testSpan.textContent = data.title
            // testAnch.setAttribute('href', 'https://materializecss.com/cards.html')
            // testAnch.textContent = 'Test Link'
            testSpanRevTitle.textContent = data.title
            revPara.textContent = data.overview
            var testAnch = document.createElement('a');
            // likeBtn.appendChild(starI)

            testAnch.setAttribute('href', '#modal1');
            testAnch.setAttribute('data-ytsearch', data.title);
            testAnch.classList.add('waves-effect','btn', 'waves-light', 'modal-trigger', 'findtrailer', 'sizeMe');
            testAnch.textContent = 'Watch The Trailer';
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
            pageBody.appendChild(testCard);
            (function() {
                testAnch.addEventListener('click', function(e){
                findyoutubeid(e.target.dataset.ytsearch)
                console.log(e.target.dataset.ytsearch) })
                // 
                
                //
                
                    // console.log(e.target) 
            
            })(i)
        
        })
    }

}
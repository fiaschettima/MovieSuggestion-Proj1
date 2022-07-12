// array to hold the movies information
var movieIds = [];
var trailerVID = document.getElementById('trailerVID')
// for each key in local storage push to moive array
function forEachKey() {
    for (var i = 0; i < localStorage.length; i++) {
        movieIds.push(localStorage.getItem(localStorage.key(i)));
        
    }
    // 
}
forEachKey();

// Prints favorites cards similar to main print card function main difference is fetch url being used
// as well as results being one movie searched individually
printFavorites(movieIds)
function printFavorites (titleId) {
    var pageBody = document.getElementById('cardHere')
    pageBody.innerHTML = "";
    console.log(titleId);
    for (var i = 0; i < titleId.length; i++) {
        var tmdbURL = 'https://api.themoviedb.org/3/movie/' + titleId[i] + '?api_key=' + tmdbAPI + '&language=en-US';
        fetch(tmdbURL)
            .then(function(response){
                return response.json();
        }).then(function(data){

        // create cards on fav page minus similar button// 
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
            testSpanRevTitle.textContent = data.title
            revPara.textContent = data.overview
            var testAnch = document.createElement('a');
            var likeBtn = document.createElement('a')
            likeBtn.classList.add('btn', 'waves-effect','waves-light','favBtn', 'right','fa', 'fa-star','like')
            likeBtn.setAttribute('data-id', data.id)
            likeBtn.setAttribute('data-name', data.title)
            testAnch.setAttribute('href', '#modal1');
            testAnch.setAttribute('data-ytsearch', data.title);
            testAnch.classList.add('waves-effect','btn', 'waves-light', 'modal-trigger', 'findtrailer', 'sizeMe');
            testAnch.textContent = 'Watch The Trailer';
            testCardImgCon.appendChild(testImage)
            testSpan.appendChild(OpenRev)
            testContentCont.appendChild(testSpan)
            testPar.appendChild(testAnch)
            testPar.appendChild(likeBtn)
            testContentCont.appendChild(testPar)
            testSpanRevTitle.appendChild(closeRev)
            testDivreveal.appendChild(testSpanRevTitle)
            testDivreveal.appendChild(revPara)
            testCard.appendChild(testCardImgCon)
            testCard.appendChild(testContentCont)
            testCard.appendChild(testDivreveal)
            pageBody.appendChild(testCard);
            // event listeners for the youtube button and favorites button
            (function() {
                testAnch.addEventListener('click', function(e){
                findyoutubeid(e.target.dataset.ytsearch)
                console.log(e.target.dataset.ytsearch) })
                // 
                likeBtn.addEventListener('click', function(e){
                    e.target.classList.toggle('like');
                    checkLikes(e.target)
                })
            })(i)
        
        })
    }

}
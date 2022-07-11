// var favoriteMovies = object.keys(localStorage);
// console.log(favoriteMovies);
var movieIds = [];

function forEachKey() {
    for (var i = 0; i < localStorage.length; i++) {
        movieIds.push(localStorage.getItem(localStorage.key(i)));
        //console.log(localStorage.getItem(localStorage.key(i)));
        
    }
    // console.log(movieIds);
}
forEachKey();
movieIds.forEach(printFavorites);

function printFavorites (titleId) {
    console.log(titleId);
    var tmdbAPI = '07f3bf91adb1325ab2741c977ecdf895';
    var tmdbURL = 'https://api.themoviedb.org/3/search/movie?api_key=07f3bf91adb1325ab2741c977ecdf895&query=' + titleId+ '&api_key=' + tmdbAPI;

}

test();
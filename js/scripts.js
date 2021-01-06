
var elForm = document.querySelector(`.js-movie-form`);
var elNameInput = elForm.querySelector(`.movie-name-input`);
var elYearInput = elForm.querySelector(`.movie-year-input`);
var elGenreInput = elForm.querySelector(`.movie-genre-input`);
var elRatingInput = elForm.querySelector(`.movie-rating-input`);
var elResultBox = document.querySelector(`.box-right-content`);

var elTemplate = document.querySelector(`.movie-template`).content;

var fragmentName = document.createDocumentFragment();


var kinolar = movies.map(function (movie){
  return {
    img: movie.ImageURL,
    title: movie.Title,
    imdbRaiting: movie.imdb_rating,
    year: movie.movie_year,
    imdbId: movie.imdb_id,
    categories: movie.Categories.split(`|`),
    youtubeId: movie.ytid,
    imdbId: movie.imdb_id
  }
});

console.log(kinolar);


elForm.addEventListener(`submit`, function(evt) {
  evt.preventDefault();

  var inputValue = new RegExp(elNameInput.value, `gi`);
  elResultBox.innerHTML = ``;

  var kinolarNames = kinolar.filter(function (kino){

    if(elNameInput.value === `` || elNameInput.value === ` `){
      return
    } else

    {

      return kino.title.toString().match(inputValue);
    }

  });


  document.querySelector(`.total`).textContent = kinolarNames.length;
  console.log(kinolarNames);

  kinolarNames.forEach (function(kino) {
    var elNameItem = elTemplate.cloneNode(true);

    elNameItem.querySelector(`.movie-name`).textContent = kino.title;
    elNameItem.querySelector(`.movie-genre`).textContent = kino.categories;
    elNameItem.querySelector(`.movie-year`).textContent = kino.year;
    elNameItem.querySelector(`.movie-rating`).textContent = kino.imdbRaiting;


    fragmentName.appendChild(elNameItem);
  });

  elResultBox.appendChild(fragmentName);


  var raitingMovies = kinolar.filter(function(raiting){
    if (!Number(elRatingInput.value)){
      return
    }
    else {
      return raiting.imdbRaiting >= Number(elRatingInput.value) && raiting.imdbRaiting < 1 + Number(elRatingInput.value);
    }
  });

  document.querySelector(`.total`).textContent = raitingMovies.length;

  console.log(raitingMovies);


  raitingMovies.forEach (function(raiting) {
    var elNameItem = elTemplate.cloneNode(true);

    elNameItem.querySelector(`.movie-name`).textContent = raiting.title;
    elNameItem.querySelector(`.movie-genre`).textContent = raiting.categories;
    elNameItem.querySelector(`.movie-year`).textContent = raiting.year;
    elNameItem.querySelector(`.movie-rating`).textContent = raiting.imdbRaiting;


    fragmentName.appendChild(elNameItem);
  });

  elResultBox.appendChild(fragmentName);
});

{/* <template class="movie-template">

<div class="movie-card">

  <img class="movie-img" src="https://picsum.photos/250/150" alt="image movie">
  <h3>Nmae: <span class="movie-name">Titanic</span></h3>
  <p>Year: <span class="movie-year">1998</span></p>
  <p>Genre: <span class="movie-genre">fantastic</span></p>
  <p>Rating: <span class="movie-rating">5</span></p>

</div>

</template> */}



// elGenreForm.addEventListener(`submit`, function(evt) {
//   evt.preventDefault();

// elGenreList.innerHTML = ``;
//   var kinolarGenre = kinolar.filter(function (kino){
//     return kino.genres.includes(elGenreInput.value);
//   });

//   document.querySelector(`.total-genre`).textContent = kinolarGenre.length;
//   console.log(kinolarGenre);

//   kinolarGenre.forEach (function(movi) {
//     var elGenreItem = elTemplate.cloneNode(true);

//     elGenreItem.querySelector(`.movie-name`).textContent = movi.title;
//     elGenreItem.querySelector(`.movie-genre`).textContent = movi.genres;
//     elGenreItem.querySelector(`.movie-year`).textContent = movi.year;

//     fragmentGenre.appendChild(elGenreItem);
//   });

//   elGenreList.appendChild(fragmentGenre);

// });



// elYearForm.addEventListener(`submit`, function(evt) {
//   evt.preventDefault();

// elYearList.innerHTML = ``;
//   var kinolarYear = kinolar.filter(function (kino){
//     return kino.year === Number(elYearInput.value);
//   });

//   document.querySelector(`.total-year`).textContent = kinolarYear.length;
//   console.log(kinolarYear);

//   kinolarYear.forEach (function(movi) {
//     var elYearItem = elTemplate.cloneNode(true);

//     elYearItem.querySelector(`.movie-name`).textContent = movi.title;
//     elYearItem.querySelector(`.movie-genre`).textContent = movi.genres;
//     elYearItem.querySelector(`.movie-year`).textContent = movi.year;

//     fragmentYear.appendChild(elYearItem);
//   });

//   elYearList.appendChild(fragmentYear);

// });

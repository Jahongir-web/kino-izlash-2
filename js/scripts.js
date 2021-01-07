
var elForm = document.querySelector(`.js-movie-form`);
var elNameInput = elForm.querySelector(`.movie-name-input`);
var elYearInput = elForm.querySelector(`.movie-year-input`);
var elGenreSelect = elForm.querySelector(`.movie-genre-select`);
var elRatingInput = elForm.querySelector(`.movie-rating-input`);
var elResultBox = document.querySelector(`.box-right-content`);

var elTemplate = document.querySelector(`.movie-template`).content;

var fragmentName = document.createDocumentFragment();


var kinolar = movies.map(function (movie){
  return {
    img: movie.ImageURL,
    title: movie.Title.toString(),
    imdbRaiting: movie.imdb_rating,
    year: movie.movie_year,
    imdbId: movie.imdb_id,
    categories: movie.Categories.split(`|`),
    youtubeId: movie.ytid
  }
});

console.log(kinolar);

var genres = [];

kinolar.forEach(function(kino) {
  kino.categories.forEach(function(genre){
    if (!genres.includes(genre)) {
      genres.push(genre);
    }
  });
});

console.log(genres);


genres.forEach(function(janr){
  var elOption = document.createElement(`option`);
  elOption.textContent = janr;
  elOption.setAttribute(`value`, janr);
  elGenreSelect.appendChild(elOption);
});



elForm.addEventListener(`submit`, function(evt) {
  evt.preventDefault();

  var inputValue = new RegExp(elNameInput.value, `gi`);
  elResultBox.innerHTML = ``;

  var kinolarNames = kinolar.filter(function (kino){

    if(elNameInput.value.trim() === ``){
      return
    } else

    {
      var doesCategoryMatch = elGenreSelect.value === `all` || kino.categories.includes(elGenreSelect.value);

      return kino.title.toString().match(inputValue) && (kino.imdbRaiting >= Number(elRatingInput.value)) && doesCategoryMatch;
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
    elNameItem.querySelector(`.movie-img`).setAttribute(`src`, `http://i3.ytimg.com/vi/${kino.youtubeId}/hqdefault.jpg`);


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

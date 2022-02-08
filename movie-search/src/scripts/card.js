import Poster from '../assets/poster.png';
import StarIcon from '../assets/star-icon.png';

export default class Card {
  constructor(title, pictureUrl, imdbID, imdbRating) {
    this.title = title;
    this.pictureUrl = pictureUrl;
    this.imdbID = imdbID;
    this.imdbRating = imdbRating;
  }

  createPoster() {
    const posterWrapper = document.createElement('div');
    posterWrapper.classList.add('poster__wrapper');
    posterWrapper.style.backgroundImage = (this.pictureUrl === 'N/A') ? `url(url(${Poster})` : `url(${this.pictureUrl}), url(${Poster})`;
    return posterWrapper;
  }

  createFilmLink() {
    const filmLink = document.createElement('a');
    filmLink.textContent = this.title;
    filmLink.href = `https://imdb.com/title/${this.imdbID}`;
    filmLink.target = '_blank';
    return filmLink;
  }

  createFilmPlot() {
    const filmRating = document.createElement('div');
    filmRating.classList.add('film__rating');

    const starIcon = new Image();
    starIcon.src = `${StarIcon}`;
    starIcon.classList.add('star-icon');

    const rating = document.createElement('p');
    rating.innerText = this.imdbRating;

    filmRating.append(rating, starIcon);
    return filmRating;
  }

  createCardWrapper() {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('film-card__wrapper', 'swiper-slide', 'appeared');
    cardWrapper.append(this.createFilmLink(), this.createPoster(), this.createFilmPlot());
    return cardWrapper;
  }
}

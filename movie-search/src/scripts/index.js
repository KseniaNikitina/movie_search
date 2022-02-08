import '../styles/style.css';
import '../styles/spinner.css';
import '../styles/virtualKeyboard.css';
import 'swiper/css/swiper.css';

import createSearchField from './createSearchField';
import Card from './card';
import createMessageField from './createMessageField';
import closeIconHandler from './closeIconHandler';
import initKeyboard from './initKeyboard';
import createSwiper from './createSwiper';
import changeSlidesPerView from './changeSlides';
import createSpinner from './createSpinner';


class Application {
  constructor(omdbApiKey, yandexApiKey) {
    this.omdbApiKey = omdbApiKey;
    this.yandexApiKey = yandexApiKey;
    this.searchUrl = '';
    this.translateUrl = '';
    this.swiper = null;
    this.pageCounter = 1;
  }

  createMovieSearchField() {
    createSearchField();
    initKeyboard();
    createMessageField();
    createSpinner();

    this.swiper = createSwiper(this);
    changeSlidesPerView(this.swiper);
    /*window.addEventListener('resize', () => {
      console.log('recised!');
      changeSlidesPerView(this.swiper);
    });*/

    window.onresize = () => {
      console.log('hello!');
      changeSlidesPerView(this.swiper);
    };

    const sliderWrappper = document.querySelector('.swiper-container');
    sliderWrappper.classList.add('hidden');

    const searchButton = document.querySelector('.search-field__button');
    searchButton.addEventListener('click', () => this.initSearch(true));

    const returnButtonKeyCode = 13;
    const searchInput = document.querySelector('.search-field__input');
    searchInput.addEventListener('keydown', (event) => {
      if (event.keyCode === returnButtonKeyCode) {
        this.initSearch(true);
      }
    });

    const virtualKeyboardEnterButton = document.querySelector('.general.enter');
    virtualKeyboardEnterButton.addEventListener('click', () => this.initSearch(true)); 
  }

  initSearch(isNewSearch) {
    const keyboardWrapper = document.querySelector('.virtual-keyboard');
    const searchInput = document.querySelector('.search-field__input');
    const searchTerm = encodeURIComponent(searchInput.value);
    const messageText = document.querySelector('.message__text');
    const spinner = document.querySelector('.spinner');
    this.searchUrl = `https://www.omdbapi.com/?apikey=${this.omdbApiKey}`;
    this.translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.yandexApiKey}&text=${searchTerm}&lang=en`;

    messageText.classList.add('hidden');
    if (!keyboardWrapper.classList.contains('hidden')) {
      keyboardWrapper.classList.add('hidden');
    }

    if (searchInput.value !== '') {
      spinner.classList.remove('hidden');

      fetch(this.translateUrl)
        .then((response) => response.json())
        .then((object) => {
          if (object.code === 200) {
            if (object.lang !== 'en-en') {
              messageText.classList.remove('hidden');
              messageText.textContent = `Showing results for "${object.text[0]}"`;
            } else {
              messageText.textContent = '';
            }
          } else {
            throw new Error('broken');
          }
          return object.text[0];
        })
        .then((searchText) => fetch(`${this.searchUrl}&s=${encodeURIComponent(searchText)}&page=${this.pageCounter}`))
        .then((response) => response.json())
        .then((object) => {
          if (object.Response === 'True') {
            return object;
          }
          if (object.Response === 'False') {
            throw new Error('not found');
          }
        })
        .then((object) => object.Search)
        .then((results) => {
          const promises = [];

          results.forEach((item) => {
            const filmID = encodeURIComponent(item.imdbID);
            const filmURL = `${this.searchUrl}&i=${filmID}`;

            const promise = fetch(filmURL)
              .then((response) => response.json());
            promises.push(promise);
          });
          return Promise.allSettled(promises);
        })
        .then((results) => {
          const cardsInfo = [];
          results.forEach((object) => {
            const cardArguments = [];
            const { value } = object;
            cardArguments.push(value.Title, value.Poster, value.imdbID, value.imdbRating);
            cardsInfo.push(cardArguments);
          });
          return cardsInfo;
        })
        .then((cardsInfo) => {
          const sliderWrappper = document.querySelector('.swiper-container');
          if (sliderWrappper.classList.contains('hidden')) {
            sliderWrappper.classList.remove('hidden');
          }
          if (isNewSearch) {
            const slides = document.querySelectorAll('.film-card__wrapper');
            slides.forEach((slide) => {
              slide.classList.remove('appeared');
              slide.classList.add('removed');
            });
            return new Promise(
              ((resolve) => {
                setTimeout(() => resolve(cardsInfo), 1000);
              }),
            );
          }
          return cardsInfo;
        })
        .then((cardsInfo) => {
          spinner.classList.add('hidden');
          if (isNewSearch) {
            this.swiper.removeAllSlides();
            this.swiper.update();
          }
          cardsInfo.forEach((arr) => {
            const card = new Card(...arr);
            this.swiper.appendSlide(card.createCardWrapper());
            this.swiper.update();
          });
        })
        .catch((errors) => {
          spinner.classList.add('hidden');
          messageText.classList.remove('hidden');
          messageText.innerText = `No results for ${searchInput.value}`;
        });
    }
  }
}

window.onload = () => {
  const yandexApiKey = 'trnsl.1.1.20200507T165802Z.a49978649c417446.cd2487a9fea18d5b3b225292f7f42554cb76500b';
  const omdbApiKey = '6b1c4d7a';

  const movieSearch = new Application(omdbApiKey, yandexApiKey);
  movieSearch.createMovieSearchField();
  const searchInput = document.querySelector('.search-field__input');
  searchInput.focus();
  closeIconHandler();
};

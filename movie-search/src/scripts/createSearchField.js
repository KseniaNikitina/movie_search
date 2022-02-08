import SearchIcon from '../assets/search-icon.svg';
import CrossIcon from '../assets/cross-icon.svg';
import KeyboardIcon from '../assets/keyboard-icon.png';

export default function createSearchField() {
  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('search-field__input-wrapper');

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search movie';
  searchInput.autocomplete = 'off';
  searchInput.classList.add('search-field__input');

  const searchIcon = new Image();
  searchIcon.src = SearchIcon;
  searchIcon.classList.add('search-icon');

  const closeIcon = new Image();
  closeIcon.src = CrossIcon;
  closeIcon.classList.add('close-icon');

  const keyboardIcon = new Image();
  keyboardIcon.src = KeyboardIcon;
  keyboardIcon.classList.add('keyboard-icon');

  inputWrapper.append(searchIcon, searchInput, closeIcon, keyboardIcon);

  const searchButton = document.createElement('button');
  searchButton.classList.add('search-field__button');
  searchButton.textContent = 'search';

  const searchWrapper = document.createElement('div');
  searchWrapper.classList.add('search-field__wrapper');

  searchWrapper.append(inputWrapper, searchButton);
  const mainWrapper = document.querySelector('.main-wrapper');
  mainWrapper.append(searchWrapper);
}

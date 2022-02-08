import keyUpHandler from './keyupHandler';
import keyDownHandler from './keydownHandler';
import createKey from './createKey';

export default function useVirtualKeyboard(layout, textField) {
  const description = document.createElement('p');
  description.innerHTML = 'macOs keyboard, change language - shift + alt using mouse';
  if (!window.localStorage.getItem('language')) {
    window.localStorage.setItem('language', 'eng');
  }
  createKey(layout, textField);
  keyDownHandler(layout);
  keyUpHandler();
  const keyboardWrapper = document.querySelector('.virtual-keyboard');
  keyboardWrapper.appendChild(description);
}

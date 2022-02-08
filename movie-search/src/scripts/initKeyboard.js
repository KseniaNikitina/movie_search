import layout from './virtualKeyboard/layout';
import useVirtualKeyboard from './virtualKeyboard/useVirtualKeyboard';

export default function initKeyboard() {
  const keyboardIcon = document.querySelector('.keyboard-icon');
  const searchInput = document.querySelector('.search-field__input');
  useVirtualKeyboard(layout, searchInput);
  const keyboardWrapper = document.querySelector('.virtual-keyboard');
  keyboardWrapper.classList.add('hidden');

  keyboardIcon.addEventListener('click', () => keyboardWrapper.classList.toggle('hidden'));
}

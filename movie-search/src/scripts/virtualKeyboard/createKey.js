import Key from './keyboard';

const createKey = (layout, textField) => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('virtual-keyboard');
  layout.forEach((element) => {
    const line = document.createElement('div');
    line.classList.add('line');
    keyboard.appendChild(line);
    element.forEach((key) => {
      const keyButton = new Key(key, window.localStorage.getItem('language'), textField);
      line.appendChild(keyButton.createKeyContainer());
    });
    const mainWrapper = document.querySelector('.main-wrapper');
    mainWrapper.append(keyboard);
  });
};

export default createKey;

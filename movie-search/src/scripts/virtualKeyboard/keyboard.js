export default class Key {
  constructor(keyValue, language, textField) {
    this.keyValue = keyValue;
    this.language = language;
    this.textField = textField;
  }

  createKeyContainer() {
    this.container = document.createElement('div');
    this.container.classList.add(`num${this.keyValue.code}`);
    switch (this.keyValue.type) {
      case 'delete':
        this.createKeyNode('delete', 'delete');
        break;
      case 'shift':
        this.createKeyNode('shift', 'shift');
        if ('className' in this.keyValue) {
          this.container.classList.add(this.keyValue.className);
        }
        break;
      case 'capsLock':
        this.createKeyNode('caps lock', 'caps-lock');
        break;
      case 'control':
        this.createKeyNode('control', 'control');
        break;
      case 'alt':
        this.createKeyNode('alt', 'alt');
        break;
      case 'command':
        this.createKeyNode('command', 'command');
        break;
      case 'leftArrow':
        this.createKeyNode('←', 'left-arrow');
        break;
      case 'rightArrow':
        this.createKeyNode('→', 'right-arrow');
        break;
      case 'topArrow':
        this.createKeyNode('↑', 'top-arrow');
        break;
      case 'bottomArrow':
        this.createKeyNode('↓', 'bottom-arrow');
        break;
      case 'general': {
        const generalKeyRu = document.createElement('span');
        const generalKeyEng = document.createElement('span');
        const anotherGeneralKeyRu = document.createElement('span');
        const anotherGeneralKeyEng = document.createElement('span');
        if (this.keyValue.primaryValueRu === this.keyValue.secondaryValueRu.toLowerCase()) {
          generalKeyRu.innerHTML = this.keyValue.primaryValueRu;
        } else {
          anotherGeneralKeyRu.innerHTML = this.keyValue.secondaryValueRu;
          generalKeyRu.innerHTML = this.keyValue.primaryValueRu;
          this.container.appendChild(anotherGeneralKeyRu);
        }
        if (this.keyValue.primaryValueEng === this.keyValue.secondaryValueEng.toLowerCase()) {
          generalKeyEng.innerHTML = this.keyValue.primaryValueEng;
        } else {
          anotherGeneralKeyEng.innerHTML = this.keyValue.secondaryValueEng;
          generalKeyEng.innerHTML = this.keyValue.primaryValueEng;
          this.container.appendChild(anotherGeneralKeyEng);
        }

        this.container.appendChild(generalKeyRu);
        this.container.appendChild(generalKeyEng);


        this.container.classList.add('general');
        if ('className' in this.keyValue && this.keyValue.className !== 'right-shift') {
          this.container.classList.add(this.keyValue.className);
          const content = document.createElement('span');
          content.innerHTML = this.keyValue.className;
          this.container.appendChild(content);
        }
        if (this.language === 'ru') {
          generalKeyEng.classList.add('hidden');
          anotherGeneralKeyEng.classList.add('hidden');
        }
        if (this.language === 'eng') {
          generalKeyRu.classList.add('hidden');
          anotherGeneralKeyRu.classList.add('hidden');
        }
        break;
      }
      default:
        break;
    }


    this.container.addEventListener('mousedown', () => {
      this.container.classList.add('clicked');
      this.onKeyHandler();
      this.textField.focus();
    });

    this.container.addEventListener('mouseup', () => {
      this.container.classList.remove('clicked');
      this.textField.focus();
    });

    return this.container;
  }

  onKeyHandler() {
    let currantCaretPosition = this.textField.selectionStart;
    const outputText = this.textField.value;
    const shift = document.querySelector('.shift');

    switch (this.keyValue.type) {
      case 'general': {
        const capsLock = document.querySelector('.caps-lock');
        let charToInsert = '';
        this.language = window.localStorage.getItem('language');

        if (this.language === 'eng') {
          if (shift.classList.contains('active') || capsLock.classList.contains('active')) {
            charToInsert = this.keyValue.secondaryValueEng;
          } else {
            charToInsert = this.keyValue.primaryValueEng;
          }
        } else if (shift.classList.contains('active') || capsLock.classList.contains('active')) {
          charToInsert = this.keyValue.secondaryValueRu;
        } else {
          charToInsert = this.keyValue.primaryValueRu;
        }
        const headString = outputText.substring(0, currantCaretPosition);
        const tailString = outputText.substring(this.textField.selectionEnd);
        this.textField.value = headString + charToInsert + tailString;
        currantCaretPosition += 1;
        this.textField.selectionStart = currantCaretPosition;
        this.textField.selectionEnd = currantCaretPosition;
        break;
      }

      case 'shift':
        this.changeActiveState();
        break;

      case 'capsLock':
        this.changeActiveState();
        break;

      case 'delete': {
        const headString = outputText.substring(0, currantCaretPosition - 1);
        const tailString = outputText.substring(currantCaretPosition);
        this.textField.value = headString + tailString;
        currantCaretPosition -= 1;
        this.textField.selectionStart = currantCaretPosition;
        this.textField.selectionEnd = currantCaretPosition;
        break;
      }

      case 'rightArrow':
        this.textField.selectionStart = currantCaretPosition + 1;
        this.textField.selectionEnd = currantCaretPosition + 1;
        break;

      case 'leftArrow':
        this.textField.selectionStart = currantCaretPosition - 1;
        this.textField.selectionEnd = currantCaretPosition - 1;
        break;

      case 'topArrow':
        if (outputText.substring(0, currantCaretPosition).lastIndexOf('\n') !== -1) {
          this.textField.selectionStart = outputText.substring(0, currantCaretPosition).lastIndexOf('\n');
          this.textField.selectionEnd = outputText.substring(0, currantCaretPosition).lastIndexOf('\n');
          currantCaretPosition = this.textField.selectionStart;
        }
        break;

      case 'bottomArrow':
        if (outputText.indexOf('\n', currantCaretPosition) !== -1) {
          this.textField.selectionStart = outputText.indexOf('\n', currantCaretPosition) + 1;
          this.textField.selectionEnd = outputText.indexOf('\n', currantCaretPosition) + 1;
          currantCaretPosition = this.textField.selectionStart;
        }
        break;

      case 'alt': {
        const generalKeys = document.querySelectorAll('.general span');
        if (shift.classList.contains('active')) {
          if (this.language === 'eng') {
            this.language = 'ru';
            window.localStorage.setItem('language', 'ru');
            generalKeys.forEach((elem) => {
              elem.classList.toggle('hidden');
            });
          } else {
            this.language = 'eng';
            window.localStorage.setItem('language', 'eng');
            generalKeys.forEach((elem) => {
              elem.classList.toggle('hidden');
            });
          }
        }
        break;
      }
      default:
        break;
    }
  }

  changeActiveState() {
    if (!this.keyValue.active) {
      this.keyValue.active = true;
      this.container.classList.add('active');
    } else {
      this.keyValue.active = false;
      this.container.classList.toggle('active');
    }
  }

  createKeyNode(name, className) {
    const key = document.createElement('p');
    this.container.classList.add(className);
    key.innerHTML = name;
    this.container.appendChild(key);
  }
}

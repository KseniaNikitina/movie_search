const keyUpHandler = () => {
  document.addEventListener('keyup', () => document.querySelector('.clicked').classList.remove('clicked'));
  document.querySelector('.search-field__input').focus();
};

export default keyUpHandler;

const keyDownHandler = (layout) => {
  document.addEventListener('keydown', (e) => {
    const keycode = e.keyCode;
    layout.forEach((elem) => {
      elem.forEach((key) => {
        if (key.code === keycode.toString()) {
          document.querySelector(`.num${key.code}`).classList.add('clicked');
        }
      });
    });
    document.querySelector('.search-field__input').focus();
  });
};

export default keyDownHandler;

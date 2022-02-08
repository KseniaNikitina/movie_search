export default function createSpinner() {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner', 'hidden');
  const mainWrapper = document.querySelector('.main-wrapper');
  if (mainWrapper) {
    mainWrapper.append(spinner);
  }
}

export default function closeIconHandler() {
  const closeIcon = document.querySelector('.close-icon');
  const searchInput = document.querySelector('.search-field__input');
  closeIcon.addEventListener('click', () => {
    searchInput.value = '';
  });
}

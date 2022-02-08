export default function createMessageField() {
  const mainWrapper = document.querySelector('.main-wrapper');
  const messageField = document.createElement('div');
  messageField.classList.add('message__field');
  const messageText = document.createElement('p');
  messageText.classList.add('message__text');
  messageField.append(messageText);
  mainWrapper.append(messageField);
}

const layout = [
  [
    {
      type: 'general', primaryValueEng: '`', secondaryValueEng: '~', primaryValueRu: ']', secondaryValueRu: '[', code: '192',
    },
    {
      type: 'general', primaryValueEng: '1', secondaryValueEng: '!', primaryValueRu: '1', secondaryValueRu: '!', code: '49',
    },
    {
      type: 'general', primaryValueEng: '2', secondaryValueEng: '@', primaryValueRu: '2', secondaryValueRu: '"', code: '50',
    },
    {
      type: 'general', primaryValueEng: '3', secondaryValueEng: '#', primaryValueRu: '3', secondaryValueRu: '№', code: '51',
    },
    {
      type: 'general', primaryValueEng: '4', secondaryValueEng: '$', primaryValueRu: '4', secondaryValueRu: '%', code: '52',
    },
    {
      type: 'general', primaryValueEng: '5', secondaryValueEng: '%', primaryValueRu: '5', secondaryValueRu: ':', code: '53',
    },
    {
      type: 'general', primaryValueEng: '6', secondaryValueEng: '^', primaryValueRu: '6', secondaryValueRu: ',', code: '54',
    },
    {
      type: 'general', primaryValueEng: '7', secondaryValueEng: '&', primaryValueRu: '7', secondaryValueRu: '.', code: '55',
    },
    {
      type: 'general', primaryValueEng: '8', secondaryValueEng: '*', primaryValueRu: '8', secondaryValueRu: ';', code: '56',
    },
    {
      type: 'general', primaryValueEng: '9', secondaryValueEng: '(', primaryValueRu: '9', secondaryValueRu: '(', code: '57',
    },
    {
      type: 'general', primaryValueEng: '0', secondaryValueEng: ')', primaryValueRu: '0', secondaryValueRu: ')', code: '48',
    },
    {
      type: 'general', primaryValueEng: '-', secondaryValueEng: '_', primaryValueRu: '-', secondaryValueRu: '_', code: '189',
    },
    {
      type: 'general', primaryValueEng: '=', secondaryValueEng: '+', primaryValueRu: '+', secondaryValueRu: '+', code: '187',
    },
    { type: 'delete', code: '8' },
  ],
  [
    {
      type: 'general', primaryValueEng: '\t', secondaryValueEng: '\t', primaryValueRu: '\t', secondaryValueRu: '\t', className: 'tab', code: '9',
    },
    {
      type: 'general', primaryValueEng: 'q', secondaryValueEng: 'Q', primaryValueRu: 'й', secondaryValueRu: 'Й', code: '81',
    },
    {
      type: 'general', primaryValueEng: 'w', secondaryValueEng: 'W', primaryValueRu: 'ц', secondaryValueRu: 'Ц', code: '87',
    },
    {
      type: 'general', primaryValueEng: 'e', secondaryValueEng: 'E', primaryValueRu: 'у', secondaryValueRu: 'У', code: '69',
    },
    {
      type: 'general', primaryValueEng: 'r', secondaryValueEng: 'R', primaryValueRu: 'к', secondaryValueRu: 'К', code: '82',
    },
    {
      type: 'general', primaryValueEng: 't', secondaryValueEng: 'T', primaryValueRu: 'е', secondaryValueRu: 'Е', code: '84',
    },
    {
      type: 'general', primaryValueEng: 'y', secondaryValueEng: 'Y', primaryValueRu: 'н', secondaryValueRu: 'Н', code: '89',
    },
    {
      type: 'general', primaryValueEng: 'u', secondaryValueEng: 'U', primaryValueRu: 'г', secondaryValueRu: 'Г', code: '85',
    },
    {
      type: 'general', primaryValueEng: 'i', secondaryValueEng: 'I', primaryValueRu: 'ш', secondaryValueRu: 'Ш', code: '73',
    },
    {
      type: 'general', primaryValueEng: 'o', secondaryValueEng: 'O', primaryValueRu: 'щ', secondaryValueRu: 'Щ', code: '79',
    },
    {
      type: 'general', primaryValueEng: 'p', secondaryValueEng: 'P', primaryValueRu: 'з', secondaryValueRu: 'З', code: '80',
    },
    {
      type: 'general', primaryValueEng: '[', secondaryValueEng: '{', primaryValueRu: 'х', secondaryValueRu: 'Х', code: '219',
    },
    {
      type: 'general', primaryValueEng: ']', secondaryValueEng: '}', primaryValueRu: 'ъ', secondaryValueRu: 'Ъ', code: '221',
    },
    {
      type: 'general', primaryValueEng: '\\', secondaryValueEng: '|', primaryValueRu: 'ё', secondaryValueRu: 'Ё', code: '220',
    },
  ],
  [
    { type: 'capsLock', active: false, code: '20' },
    {
      type: 'general', primaryValueEng: 'a', secondaryValueEng: 'A', primaryValueRu: 'ф', secondaryValueRu: 'Ф', code: '65',
    },
    {
      type: 'general', primaryValueEng: 's', secondaryValueEng: 'S', primaryValueRu: 'ы', secondaryValueRu: 'Ы', code: '83',
    },
    {
      type: 'general', primaryValueEng: 'd', secondaryValueEng: 'D', primaryValueRu: 'в', secondaryValueRu: 'В', code: '68',
    },
    {
      type: 'general', primaryValueEng: 'f', secondaryValueEng: 'F', primaryValueRu: 'а', secondaryValueRu: 'А', code: '70',
    },
    {
      type: 'general', primaryValueEng: 'g', secondaryValueEng: 'G', primaryValueRu: 'п', secondaryValueRu: 'П', code: '71',
    },
    {
      type: 'general', primaryValueEng: 'h', secondaryValueEng: 'H', primaryValueRu: 'р', secondaryValueRu: 'Р', code: '72',
    },
    {
      type: 'general', primaryValueEng: 'j', secondaryValueEng: 'J', primaryValueRu: 'о', secondaryValueRu: 'О', code: '74',
    },
    {
      type: 'general', primaryValueEng: 'k', secondaryValueEng: 'K', primaryValueRu: 'л', secondaryValueRu: 'Л', code: '75',
    },
    {
      type: 'general', primaryValueEng: 'l', secondaryValueEng: 'L', primaryValueRu: 'д', secondaryValueRu: 'Д', code: '76',
    },
    {
      type: 'general', primaryValueEng: ';', secondaryValueEng: ':', primaryValueRu: 'ж', secondaryValueRu: 'Ж', code: '189',
    },
    {
      type: 'general', primaryValueEng: '\'', secondaryValueEng: '"', primaryValueRu: 'э', secondaryValueRu: 'Э', code: '222',
    },
    {
      type: 'general', primaryValueEng: '\n', secondaryValueEng: '\n', primaryValueRu: '\n', secondaryValueRu: '\n', className: 'enter', code: '13',
    },
  ],
  [{ type: 'shift', active: false, code: '16' },
    {
      type: 'general', primaryValueEng: 'z', secondaryValueEng: 'Z', primaryValueRu: 'я', secondaryValueRu: 'Я', code: '90',
    },
    {
      type: 'general', primaryValueEng: 'x', secondaryValueEng: 'X', primaryValueRu: 'ч', secondaryValueRu: 'Ч', code: '88',
    },
    {
      type: 'general', primaryValueEng: 'c', secondaryValueEng: 'C', primaryValueRu: 'с', secondaryValueRu: 'С', code: '67',
    },
    {
      type: 'general', primaryValueEng: 'v', secondaryValueEng: 'V', primaryValueRu: 'м', secondaryValueRu: 'М', code: '86',
    },
    {
      type: 'general', primaryValueEng: 'b', secondaryValueEng: 'B', primaryValueRu: 'и', secondaryValueRu: 'И', code: '66',
    },
    {
      type: 'general', primaryValueEng: 'n', secondaryValueEng: 'N', primaryValueRu: 'т', secondaryValueRu: 'Т', code: '78',
    },
    {
      type: 'general', primaryValueEng: 'm', secondaryValueEng: 'M', primaryValueRu: 'ь', secondaryValueRu: 'Ь', code: '77',
    },
    {
      type: 'general', primaryValueEng: ',', secondaryValueEng: '<', primaryValueRu: 'б', secondaryValueRu: 'Б', code: '188',
    },
    {
      type: 'general', primaryValueEng: '.', secondaryValueEng: '>', primaryValueRu: 'ю', secondaryValueRu: 'Ю', code: '190',
    },
    {
      type: 'general', primaryValueEng: '/', secondaryValueEng: '?', primaryValueRu: '/', secondaryValueRu: '?', code: '191',
    },
    { type: 'topArrow', code: '38' },
    {
      type: 'shift', active: false, code: '16', className: 'right-shift',
    },
  ],
  [
    { type: 'control', code: '17' },
    { type: 'alt', code: '18' },
    { type: 'command', code: '91' },
    {
      type: 'general', primaryValueEng: ' ', secondaryValueEng: ' ', primaryValueRu: ' ', secondaryValueRu: ' ', className: 'space', code: '32',
    },
    { type: 'command', code: '93' },
    { type: 'alt', code: '18' },
    { type: 'leftArrow', code: '37' },

    { type: 'bottomArrow', code: '40' },
    { type: 'rightArrow', code: '39' },
  ],
];
export default layout;

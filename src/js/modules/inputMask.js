import IMask from 'imask';

export default function inputMask() {
  const telephones = document.querySelectorAll('input[type="tel"]');

  telephones.forEach(tel => {
    IMask(
      tel, {
      mask: '+{18} (00) 000 - 00 - 00',
      lazy: false
    });
  });
}

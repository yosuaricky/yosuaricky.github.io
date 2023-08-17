toastBootstrap.show()
// send submitted form value to google sheets
const scriptURL =
  'https://script.google.com/macros/s/AKfycbzows9jk6sDDzGNTkbE7VAr3Au5KsEFeJPinm5HITF0aa8B4H5oTyyq2zpsoyJs37PC/exec';
const form = document.forms['contact-form'];
const btnSubmit = document.querySelector('.btn-submit-message');
const btnSending = document.querySelector('.btn-sending-message');
const myAlert = document.querySelector('.my-alert');

const switchingButton = () => {
  btnSending.classList.toggle('d-none');
  btnSubmit.classList.toggle('d-none');
};

const timedAlert = () => {
  myAlert.classList.toggle('d-none');
  // hide after 3 sec
  setTimeout(function () {
    myAlert.classList.toggle('d-none');
  }, 3000);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // show sending/loading button & hide submit button
  switchingButton();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // hide sending/loading button & show submit button
      switchingButton();
      // reveal alert message
      timedAlert();
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

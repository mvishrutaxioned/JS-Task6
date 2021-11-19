var generateBtn = document.querySelector('#generatePass');
var inputLength = document.querySelector('input[type="number"]');
var checks = document.querySelectorAll('input[type="checkbox"]');
var inputPass = document.querySelector('input[type="text"]');
var copyBtn = document.querySelector('#copy');


generateBtn.addEventListener('click', (e) => submitForm(e));
copyBtn.addEventListener('click', (e) => copyPass(e))
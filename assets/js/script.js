var generateBtn = document.querySelector('#generatePass');
var inputLength = document.querySelector('input[type="number"]');
var checks = document.querySelectorAll('input[type="checkbox"]');
var inputPass = document.querySelector('input[type="text"]');
var copyBtn = document.querySelector('#copy');

function submitForm(e) {
    inputPass.value = '';
    e.preventDefault();

    var result = {
        upperCase: false,
        lowerCase: false,
        numbers: false,
        symbols: false,
    };

    checks.forEach(check => {
        switch (true) {
            case check.id == 'upperCase':
                (check.checked ? result.upperCase = true : result.upperCase = false);
                break;
            case check.id == 'lowerCase':
                (check.checked ? result.lowerCase = true : result.lowerCase = false);
                break;
            case check.id == 'numbers':
                (check.checked ? result.numbers = true : result.numbers = false);
                break;
            case check.id == 'symbols':
                (check.checked ? result.symbols = true : result.symbols = false);
                break;
            default:
                break;
        }
    });

    generatePass(result);
}

function generatePass(result) {

    var pass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz1234567890!@#$%^&*()-_+=/\|?><":;}{][`~';

    if(result.upperCase == false) {
        pass = pass.replace(/[A-Z]/g, '' );
    }
    if(result.lowerCase == false) {
        pass = pass.replace(/[a-z]/g, '' );
    }
    if(result.numbers == false) {
        pass = pass.replace(/[0-9]/g, '' );
    }
    if(result.symbols == false) {
        pass = pass.replace(/[^A-Za-z0-9]/g, '' );
    }

    trimLength(result, pass);
}

generateBtn.addEventListener('click', (e) => submitForm(e));
copyBtn.addEventListener('click', (e) => copyPass(e))
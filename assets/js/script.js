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

function trimLength(result, pass) {
    var str = '';
    var objLength = 0

    for(var elem in result) {
        if(result[elem] == true) {
            objLength++
        }
    }

    var length = inputLength.value;

    if(result.upperCase == true) {
        var newStr = (pass.match(/[A-Z]/g))
        var trimTo = length / objLength;
        var equation = newStr.length - (newStr.length-trimTo)
        newStr = newStr.slice(0, equation)
        str += newStr.join('')
    }
    if(result.lowerCase == true) {
        var newStr = (pass.match(/[a-z]/g))
        var trimTo = length / objLength;
        var equation = newStr.length - (newStr.length-trimTo)
        newStr = newStr.slice(0, equation)
        str += newStr.join('')
    }
    if(result.numbers == true) {
        var newStr = (pass.match(/[0-9]/g))
        var trimTo = length / objLength;
        var equation = newStr.length - (newStr.length-trimTo)
        newStr = newStr.slice(0, equation)
        str += newStr.join('')
    }
    if(result.symbols == true) {
        var newStr = (pass.match(/[^A-Za-z0-9]/g))
        var trimTo = length / objLength;
        var equation = newStr.length - (newStr.length-trimTo)
        newStr = newStr.slice(0, equation)
        str += newStr.join('')
    }

    if(str.length < length) {
        recheck(str, length, pass, result)
    }

    var shuffledStr = str.split('').sort(() => { 
        return 0.5-Math.random()
    }).join('');

    inputPass.value = shuffledStr;
}

function recheck(str, length, pass, result) {
    var remain = parseInt(length) - str.length;
    console.log(remain)
    if(result.upperCase == true) {
        var newPass = pass.match(/[A-Z]/g, '');
        newPass = newPass.slice(0,remain);
        str += newPass.join('')
    } else if(result.lowerCase == true) {
        var newPass = pass.match(/[a-z]/g, '');
        newPass = newPass.slice(0,remain);
        str += newPass.join('')
    } else if(result.numbers == true) {
        var newPass = pass.match(/[0-9]/g, '');
        newPass = newPass.slice(0,remain);
        str += newPass.join('')
    } else {
        var newPass = pass.match(/[^A-Za-z0-9]/g, '');
        newPass = newPass.slice(0,remain);
        str += newPass.join('')
    }
}

function copyPass(e) {
    e.preventDefault();

  inputPass.select();
  inputPass.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(inputPass.value);
  alert('Password Copied');
}

generateBtn.addEventListener('click', (e) => submitForm(e));
copyBtn.addEventListener('click', (e) => copyPass(e))
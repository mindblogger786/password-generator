const passBox = document.getElementById('passBox');
const passRange = document.getElementById('passRange');
const rangeValue = document.getElementById('rangeValue');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const genBtn = document.getElementById('genBtn');
const copyIcon = document.getElementById('copyIcon');

copyIcon.addEventListener('click', () => {
    if (passBox != "" || passBox.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.title = "Password Copied"
        copyIcon.innerHTML = "check";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    } else{
        alert("First generate password to copy");
    }
});

passRange.addEventListener('input', () => {
    rangeValue.textContent = passRange.value;
});

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
});

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const allSymnols = "@#$&";


function generatePassword() {

    let genPassword = "";
    let allChars = "";

    allChars += uppercase.checked ? upperChars : "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymnols : "";

    let i = 1;
    while (i <= passRange.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}



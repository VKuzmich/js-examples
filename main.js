// переменные
let searchNumber = document.querySelector('#searchNumber');
let btnCheck = document.querySelector('#btnCheck');
let randomNum = Math.round(Math.random() * 10);
console.log(randomNum)

// события
btnCheck.onclick = checkNumber;

// creating functions
function checkNumber() {
    let num = parseInt(searchNumber.value)

    if (!isNaN(num) && num >= 0 && num <= 10) {

        if (num == randomNum) {
            alert ('You have got it!')
            location.reload()
        }else {
            alert('Missed!')
        }
    } else {
        alert ('you wrote wrong number!')
    
    }
    searchNumber.value = "";
}



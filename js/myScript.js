var myWords = [];
var firstInputField;
var secondInputField;
// append word to list
function appendWord() {
    getInputValue();
    if (validateInput(firstInputField)) {
        myWords.push(firstInputField);
    } else {
        console.log("cuvantul exista sau nu este in formatul cerut");
    }
    console.log(myWords);
}

// search word trough list
function searchWord() {
    getInputValue();
    if (validateInput(secondInputField)) {
        console.log("se gaseste in lista");    
    }
     else {
        console.log("nu se gaseste in lista");
    }
}

function getInputValue() {
    firstInputField = document.getElementById("userWordInput").value;
    secondInputField = document.getElementById("userWordSearch").value;
    clearInputValues();
}

function clearInputValues() {
    document.getElementById("userWordSearch").value = null;
    document.getElementById("userWordInput").value = null;
}

function validateInput(input) {
    var r = /\s+/;
    if(input.match(r)) {
        console.log("gasit spatiu");
        return false;
    }
    var r = /\d+/;
    if (input.match(r)) {
        console.log("gasit cifre");
        return false;
    }
    return true;
}
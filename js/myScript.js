var myWords = [];
var firstInputField;
var secondInputField;
// append word to list
function appendWord() {
    getValueOfInput();
    if (myWords.indexOf(firstInputField) == -1) {
        myWords.push(firstInputField);
    } else {
        console.log("cuvantul exista deja");
    }
    
    console.log(myWords);
    
}

// search word trough list
function searchWord() {
    getValueOfInput();
    if (myWords.indexOf(secondInputField) != -1) {
        console.log("se gaseste in lista");
        
    } else {
        console.log("nu se gaseste in lista");
        document.getElementById("userWordSearch").value = null;
    }
}

function getValueOfInput() {
    firstInputField = document.getElementById("userWordInput").value;
    secondInputField = document.getElementById("userWordSearch").value;
    document.getElementById("userWordSearch").value = null;
    document.getElementById("userWordInput").value = null;
}


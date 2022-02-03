var myWords = [];
var addWord;
var searchWord;
// append word to list
function appendWord() {
    getInputValue();
    if (validateInput(addWord)) {
        myWords.push(addWord);
        showMessage(`Word "${addWord}" added succesfully!`);
    }
    console.log(myWords); // left here on purpose for debugging reasons. 
    clearInputValues();
}

// search word trough list
function searchForWord() {
    getInputValue();
    if (myWords.includes(searchWord)) {
        showMessage(` "${searchWord}" is in the list`);    
    }
     else {
        showMessage(` "${searchWord}" is not in the list`); 
    }
    clearInputValues();
}

function getInputValue() {
    addWord = document.getElementById("userWordInput").value;
    searchWord = document.getElementById("userWordSearch").value;
}

function clearInputValues() {
    document.getElementById("userWordSearch").value = null;
    document.getElementById("userWordInput").value = null;

}

function validateInput(input) {
    var r = /\s+/;
    if(input.match(r)) {
        showMessage("The inserted word contains empty spaces. Enter a word without empty spaces!");
        return false;
    }
    var r = /\d+/;
    if (input.match(r)) {
        showMessage("The inserted word contains numbers. Enter a word without numbers!");
        return false;
    }
    if (myWords.includes(input)) {
        showMessage(`The word "${input}" already exists!`);
        return false;
    }
    if (input.length == 1) {
        showMessage(`This "${input}" is a letter not a word!`);
        return false;
    }
    return true;
}

function showMessage(parameter) {
    var paragraph = document.getElementById("userInputConfirmation");
    paragraph.textContent += parameter;
    setTimeout(hideElement, 2500) 
    function hideElement() {
        paragraph.textContent = "";
    }
}
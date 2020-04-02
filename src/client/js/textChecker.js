//check if user input is in a correct format
function checkForUserText(inputText, setErrorMessage = true) {
    console.log('::: Running check for user text :::', inputText);
    //user input is not empty
    if(!inputText) {
        if(setErrorMessage) {
            handleInputError('Your input cannot be empty.');
        }
        return false;
    }
    return true;
}

//if there is an error, write the message for user
function handleInputError(message) {
    let errorElement = document.getElementById('errorMessage');
    errorElement.innerText = message;
    errorElement.classList.remove('hidden');
    console.log('error message from handleInpuErorr: ' + message);
}

export { checkForUserText, handleInputError }

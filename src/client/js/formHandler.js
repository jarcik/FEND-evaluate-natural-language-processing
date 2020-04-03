function handleSubmit(event) {
    event.preventDefault();
    //hide possibly visible error block
    hideErrorMessage();

    //check what text was put into the form field
    let formText = document.getElementById('userText').value;
    //check if text is correctly written
    if(!Client.checkForUserText(formText)) return;

    console.log('::: Form Submitted :::');

    fetchData(formText);
}

//hide error message from view (it could be visible)
function hideErrorMessage() {
    document.getElementById('errorMessage').classList.add('hidden');
}

//fetch data from server
function fetchData(formText) {    
    //init post request parameters
    const postParams = {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formText })
      };

    //check server for the data to show 
    fetch('http://localhost:8081/classify', postParams)
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('polarity').innerHTML = res.polarity;
        document.getElementById('yourText').innerHTML = res.text;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
    })
}

export { handleSubmit }

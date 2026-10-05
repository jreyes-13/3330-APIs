$(function() {
    const RESOURCE_ID = "ae-78cogr-cb6x9hluwqtw";

    async function loadEndpoint(endpoint){
        const response = await fetch(endpoint);
        const jokeObj = await response.json();
        
        const jokeTextContainer = document.querySelector(".joke-text");
        jokeTextContainer.textContent = "";
        jokeTextContainer.textContent = jokeObj.value;
    }

    
    loadEndpoint("");


});

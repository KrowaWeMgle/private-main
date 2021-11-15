//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
//github : https://krowawemgle.github.io/private-main/



const verseChose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChose.onchange = function() {
  const verse = verseChose.value;
  updateDisplay(verse);
}
//XML

function updateDisplay(verse) {
  verse = verse.replace(" ", "");
  verse.toLowerCase();
  let url = `Fetch/verse1.txt`;
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'text';
  request.onload = function() {
    poemDisplay.textContent = request.response;
  }
  request.send();
}


//FETCH
/*
function updateDisplay(verse) {
  verse = verse.replace(" ", "");
  verse.toLowerCase();
  let url = `docs/Fetch/textExample/verse1.txt`;
  fetch(url).then(function(response) {
    response.text().then(function(text) {
      poemDisplay.textContent = text;
    });
  });
}
*/



updateDisplay('Verse 1');
verseChose.value = 'Verse 1';


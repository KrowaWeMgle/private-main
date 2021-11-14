//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data



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
  let url = `textExample/${verse}.txt`;
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
fetch(url).then(function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
*/


updateDisplay('Verse 1');
verseChose.value = 'Verse 1';

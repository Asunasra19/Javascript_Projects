const input = document.querySelector('.message');
const wordCount = document.getElementById('word-count')
const character = document.getElementById('character-count')

input.addEventListener('input', ()=>{
    let message = input.value;
    let words = message.split(' ').length;

    wordCount.innerHTML = words;
    character.innerText = message.length
})
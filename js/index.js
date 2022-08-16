document.addEventListener('DOMContentLoaded', () => {

})

function getMonsters(){
    fetch('http://localhost:3000/monsters'),
    .then(res => res.json);
}
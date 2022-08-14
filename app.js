let adv = document.getElementById('advice');
let advId = document.getElementById('adviceId');
let changeIcon = document.getElementById('diceIcon');

const url = 'https://api.adviceslip.com/advice';

function getData(){
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            adv.innerHTML = `"${data.slip.advice}"`;
            advId.innerHTML = ` #${data.slip.id}`;
        })
        .catch(error => {
            console.log(error)
        })
}

getData()

changeIcon.addEventListener('click',() =>{
    getData();
})
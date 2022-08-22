document.getElementById('player-field').addEventListener('click',function(event){
    const playerList = document.querySelectorAll('li');
    let playerCount = playerList.length;
    if(playerCount >= 5){
        alert('You can not select more than five players.')
    }
    else{
        const element = event.target;
        if (event.target.innerText === 'Select') {
            const bestFive = document.getElementById('player-list');
            const li = document.createElement('li');
            const name = event.target.parentNode.firstChild.nextSibling.innerText;
            playerCount = playerCount + 1;
            li.innerText = playerCount + ' .  ' + name;
            console.log(name);
            console.log('button clicked');
            element.setAttribute('disabled', true);
            element.classList.remove('hover:bg-sky-700', 'bg-sky-500');
            element.classList.add('bg-slate-400');
            bestFive.appendChild(li);
        }
    }
});


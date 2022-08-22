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

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getInputValueById('per-player-cost');
    if (isNaN(perPlayerCost) === true || perPlayerCost === null || perPlayerCost === '') {
        alert('Please enter costs in numbers only');
        clearInputField('per-player-cost');
        return;
    }
    else {
        const totalPlayersField = document.querySelectorAll('li');
        const totalPlayers = totalPlayersField.length;
        const totalCostOfPlayers = perPlayerCost * totalPlayers;
        setValueById('player-expenses', totalCostOfPlayers);
    }
});

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playerExpenses = getTextValueById('player-expenses');
    const managerCost = getInputValueById('manager-cost');
    if (isNaN(managerCost) === true || managerCost === null || managerCost === '') {
        alert('Please enter costs in numbers only');
        clearInputField('manager-cost');
        return;
    }
    const coachCost = getInputValueById('coach-cost');
    if (isNaN(coachCost) === true || coachCost === null || coachCost === '') {
        alert('Please enter costs in numbers only');
        clearInputField('coach-cost');
        return;
    }
    const totalCost = playerExpenses + managerCost + coachCost;
    setValueById('total', totalCost);
});
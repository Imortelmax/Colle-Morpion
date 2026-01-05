let currentPlayer = 1;
let affichageJoueur = document.getElementById('currentPlayer');
let p1Victory = document.getElementById('playerOne');
let p2Victory = document.getElementById('playerTwo');
let p1 = 0;
let p2 = 0;
let restart = document.getElementById('replay');
let logos = document.getElementsByClassName('cell'); 
let cling = new Audio("../assets/cling.mp4");
let crayon = new Audio("../assets/crayon.mp4");
let win = new Audio("../assets/win.mp3");


    
document.addEventListener('click', function play() {
        
    for (let logo of logos){
        logo.onclick = function() {
            if (currentPlayer === 1 && logo.innerHTML === ''){
                cling.play();
                logo.innerHTML = 'X';
                if (checkWin('X')){
                    setTimeout(() => {
                        win.play();
                        alert(`Player ${currentPlayer} win`);
                        p1++;
                        p1Victory.innerHTML = `${p1}`;
                    });
                } else if (isDraw()){
                    setTimeout(() => {
                        alert(`Match nul l'équipe`);
                    });
                } else {
                    currentPlayer = 2;
                }
            
            } else if (currentPlayer ===2 && logo.innerHTML === '') {
                crayon.play();
                logo.innerHTML = 'O';
                if (checkWin('O')){
                    setTimeout (() => {
                        win.play();
                        alert(`Player ${currentPlayer} win`)
                        p2++;
                        p2Victory.innerHTML = `${p2}`;
                    });
                } else if (isDraw()){
                    setTimeout(() => {
                        alert(`Match nul l'équipe`);
                    });
                } else {
                    currentPlayer = 1; 
                }
            } 
        }
        affichageJoueur.innerHTML = `Joueur ${currentPlayer}`;
    }
});

function checkWin(player) {
    const winningCombinations = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]  
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => logos[index].innerHTML === player);
    });
}

function isDraw() {
    return [...logos].every(cell => cell.innerHTML !== '');
}

function resetGame() {
    for (let logo of logos) {
        logo.innerHTML = '';
    }
    currentPlayer = 1;
    affichageJoueur.innerHTML = `Joueur ${currentPlayer}`;
}

restart.addEventListener('click', () => {
    resetGame();       
});
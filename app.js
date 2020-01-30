let bt1 = document.getElementById('bt1');
let bt2 = document.getElementById('bt2');
let bt3 = document.getElementById('bt3');

let bt4 = document.getElementById('bt4');
let bt5 = document.getElementById('bt5');
let bt6 = document.getElementById('bt6');

let bt7 = document.getElementById('bt7');
let bt8 = document.getElementById('bt8');
let bt9 = document.getElementById('bt9');

let btns = [bt1, bt2, bt3, bt4, bt5, bt6, bt7, bt8, bt9];
let str = ['bt1', 'bt2', 'bt3', 'bt4', 'bt5', 'bt6', 'bt7', 'bt8', 'bt9'];

let player1 = document.getElementById('left');
let player2 = document.getElementById('right');

let state = false;


for(let i=0; i<9; i++){
    let target = btns[i]
    target.addEventListener('click', playGame);
}


let counter = 0;
let countPlays = 0;


function playGame(e){
    let b = e.srcElement.id;

    let ind = str.indexOf(b);

    if(counter == 0 || counter % 2 == 0){
        btns[ind].innerText = '⭕';
    } else {
        btns[ind].innerText = '❌';
    }
    counter += 1;
    countPlays += 1;

    checker();

    if(countPlays == 9 && checker() == false) {
        player1.classList.add('class', 'losing');
        player2.classList.add('class', 'losing');
        setTimeout(() => {
            refreshPage()}
            , 4000);
    }
}


function checker(){

    if(btns[0].innerText  == btns[1].innerText  && btns[2].innerText == btns[1].innerText ){
      if(btns[0].innerText == '⭕'){
          console.log('PLAYER 1 WINS!');
          player1.classList.add('class', 'visible');

          setTimeout(() => {
            refreshPage()}
            , 4000);
      } else if (btns[0].innerText == '❌'){
          console.log('PLAYER 2 WINS');
          player2.classList.add('class', 'visible');

          setTimeout(() => {
            refreshPage()}
            , 4000);
      }
      return true;
    }

    if(btns[3].innerText  == btns[4].innerText  && btns[5].innerText == btns[3].innerText ){
        if(btns[3].innerText == '⭕'){
            console.log('PLAYER 1 WINS!');
            player1.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        } else if (btns[3].innerText == '❌'){
            console.log('PLAYER 2 WINS');
            player2.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        }
        return true;
    }

    if(btns[6].innerText  == btns[7].innerText  && btns[8].innerText == btns[6].innerText ){
        if(btns[6].innerText == '⭕'){
            console.log('PLAYER 1 WINS!');
            player1.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        } else if (btns[6].innerText == '❌'){
            console.log('PLAYER 2 WINS');
            player2.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        }
        return true;
    }

    if(btns[0].innerText  == btns[3].innerText  && btns[6].innerText == btns[0].innerText ){
        if(btns[0].innerText == '⭕'){
            console.log('PLAYER 1 WINS!');
            player1.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        } else if (btns[0].innerText == '❌'){
            console.log('PLAYER 2 WINS');
            player2.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        }
        return true;
    }

    if(btns[1].innerText  == btns[4].innerText  && btns[7].innerText == btns[1].innerText ){
        if(btns[1].innerText == '⭕'){
            console.log('PLAYER 1 WINS!');
            player1.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        } else if (btns[1].innerText == '❌'){
            console.log('PLAYER 2 WINS');
            player2.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        }
        return true;
    }

    if(btns[2].innerText  == btns[5].innerText && btns[8].innerText == btns[2].innerText ){
        if(btns[2].innerText == '⭕'){
            console.log('PLAYER 1 WINS!');
            player1.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        } else if (btns[2].innerText == '❌'){
            console.log('PLAYER 2 WINS');
            player2.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        }
        return true;
    }

    if(btns[0].innerText  == btns[4].innerText  && btns[8].innerText == btns[0].innerText ){
        if(btns[0].innerText == '⭕'){
            console.log('PLAYER 1 WINS!');
            player1.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        } else if (btns[0].innerText == '❌'){
            console.log('PLAYER 2 WINS');
            player2.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        }
        return true;
    }

    if(btns[2].innerText  == btns[4].innerText  && btns[6].innerText == btns[2].innerText ){
        if(btns[2].innerText == '⭕'){
            console.log('PLAYER 1 WINS!');
            player1.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        } else if (btns[2].innerText == '❌'){
            console.log('PLAYER 2 WINS');
            player2.classList.add('class', 'visible');

            setTimeout(() => {
                refreshPage()}
                , 4000);
        }
        return true;
    }

    return false;
}




function refreshPage(){
    location.reload(); 
} 

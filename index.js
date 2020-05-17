'use strict'

const btnElm = document.querySelector('#roll');

const plusOne = () =>{

const betElm = document.querySelector('#bet');
let bet = Number(betElm.value);
const gainElm = document.querySelector('.gain');



console.log(bet)

console.log(gainElm.textContent)




    let number = Math.floor(Math.random() * 6) + 1;
    
    const side1 = document.querySelector('.side1');
    const side2 = document.querySelector('.side2');
    const side3 = document.querySelector('.side3');
    const side4 = document.querySelector('.side4');
    const side5 = document.querySelector('.side5');
    const side6 = document.querySelector('.side6');

    if(number === 1){
        side1.classList.remove('hide');
        side6.classList.add('hide');
        side5.classList.add('hide');
        side4.classList.add('hide');
        side3.classList.add('hide');
        side2.classList.add('hide');
        document.querySelector('.gain').textContent = gainElm.textContent - bet;

       
    }else if(number === 2){
        side2.classList.remove('hide');
        side6.classList.add('hide');
        side5.classList.add('hide');
        side4.classList.add('hide');
        side3.classList.add('hide');
        side1.classList.add('hide');
        document.querySelector('.gain').textContent = gainElm.textContent - bet;
    
    }else if(number === 3){
        side3.classList.remove('hide');
        side2.classList.add('hide');
        side6.classList.add('hide');
        side5.classList.add('hide');
        side4.classList.add('hide');
        side1.classList.add('hide');
        document.querySelector('.gain').textContent = gainElm.textContent - bet;
    
    }else if(number === 4){
        side4.classList.remove('hide');
        side2.classList.add('hide');
        side6.classList.add('hide');
        side5.classList.add('hide');
        side3.classList.add('hide');
        side1.classList.add('hide');
        document.querySelector('.gain').textContent = gainElm.textContent - bet;
    
    }else if(number === 5){
        side5.classList.remove('hide');
        side2.classList.add('hide');
        side6.classList.add('hide');
        side4.classList.add('hide');
        side3.classList.add('hide');
        side1.classList.add('hide');
        document.querySelector('.gain').textContent = gainElm.textContent - bet;
    
    }else if(number === 6){
        side6.classList.remove('hide');
        side2.classList.add('hide');
        side5.classList.add('hide');
        side4.classList.add('hide');
        side3.classList.add('hide');
        side1.classList.add('hide');

        let win = Number(bet *6);
        let gainNum = gainElm.textContent;
        gainNum = parseInt(gainNum);

        let gain = gainNum + win;
        gainElm.textContent = gain;
        
        console.log('number origin '+gainNum);
        console.log('number to add '+win);
        console.log('total gains'+gain);
        

    }

}


btnElm.addEventListener('click', plusOne)
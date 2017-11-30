var count = 0;
var time = 10;

var box = document.querySelector('#box');
var timer = document.querySelector('#timer')

box.innerHTML = count;
box.style.top = '10px';

let canClick = true;

function onClick() {
  if(time != 0 && canClick) {
    count ++;
    box.innerHTML = count;
    moveBox();
    canClick = false;
    setTimeout(enableClick, 200);
  }
}

function enableClick() {
  canClick = true;
}

box.addEventListener('click', onClick)

function onTick() {
  time --;
  timer.innerHTML = time;
  if(time === 0) {
    clearInterval(intervalId);
    alert(`Erreichte Punkte ${count}`);
  }
}

function moveBox() {
  box.style["margin-top"] = `${Math.random() * 360}px`;
  box.style["margin-left"] = `${Math.random() * 360}px`;
}

var intervalId = setInterval(onTick, 1000);

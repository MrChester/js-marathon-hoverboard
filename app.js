const board = document.querySelector('#board');
const colors = ['#F08080', '#FFA07A', '#FF69B4', '	#FF6347', '#F0E68C', '#DDA0DD', '#9932CC', '#6A5ACD', '#F4A460']
const SQUARES_NUMBER = 600;


for(let i = 0; i < SQUARES_NUMBER; i++){
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', event => setColor(square));
  square.addEventListener('mouseleave', event => removeColor(square))

  board.append(square);
}

function setColor(elememt){
  const color = getRandomColor()
  elememt.style.backgroundColor = color;
  elememt.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elememt){
  elememt.style.backgroundColor = `#1d1d1d`;
  elememt.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
  return colors[Math.floor(Math.random() * colors.length)]
}

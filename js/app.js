
const mainHeader = document.getElementById('mainHeader');
mainHeader.style.backgroundColor = 'red';

const kanvas = document.getElementById('timeLine');

kanvas.style.width = '600px';



kanvas.addEventListener("wheel" , function(event) {
  event.preventDefault();
  let y = event.deltaY;
  let currentSize = kanvas.style.width;
  if (y > 0) {
    newSize = parseInt(currentSize) + 100;
  } else {
    newSize = parseInt(currentSize) - 100;
  }

  if (newSize > 2199) {
    newSize = 2200;
  }
  else if (newSize < 199) {
    newSize = 200;
  }

  kanvas.style.width = newSize + "px";

});

function makeGrid(row,heigh) {
    let i=0;
    for (i; i<row; i++){
          kanvas.append('<tr></tr>');
          let h=0;
          while (h<heigh){
            kanvas.find('tr').last().append('<td></td>');
            h++;
          }
    }
}
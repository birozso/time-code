
const mainHeader = document.getElementById('mainHeader');
mainHeader.style.backgroundColor = 'red';

const kanvas = document.getElementById('timeLine');


function myFunction(event) {
    event.preventDefault();
    let y = event.deltaY;
    let currentSize = event.target.style.width;
    if (y > 0) {
      newSize = parseInt(currentSize) + 10;
    } else {
      newSize = parseInt(currentSize) - 10;
    }
    event.target.style.width = newSize + "px";

}

kanvas.addEventListener("wheel" , myFunction(event));

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
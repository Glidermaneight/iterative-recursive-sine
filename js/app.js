const canvas = document.getElementById("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
function iterativeSine(a, h, k) {
  for(let i = 0; i < canvas.width; i++) {
    const x = i;
    // Calculate y using the sine function
    // Scale x to make the wave more visible (divided by 50 to stretch it)
    // Multiply by 'a' for amplitude
    // Add 'k' for vertical shift
    // Add h for horizontal shift
    const y = a * Math.sin((x - h) / 50) + k;

    if (i === 0) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.stroke();
}

function recursiveSine(a, h, k, i){
  if(i < canvas.width){
    const x = i;
    const y = a * Math.sin((x - h) / 50) + k;
    if(i === 0){
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
    else{
      ctx.lineTo(x, y);
    }
    recursiveSine(a, h, k, i + 1);
  }
  else{
    ctx.stroke();
  }
}
console.time();
iterativeSine(5, 0, window.innerHeight / 2);
console.timeEnd();
ctx.clearRect(0, 0, canvas.width, canvas.height);
console.time();
recursiveSine(5, 0, window.innerHeight / 2, 0);
console.timeEnd();

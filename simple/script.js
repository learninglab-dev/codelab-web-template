console.log("script running . . .");


var start = null;
var element = document.getElementById('moving-box');
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  console.log(timestamp);
  element.style.left = progress/10 + 'px';
  if (progress < 5000) {
    window.requestAnimationFrame(step);
  }
  if (progress >= 5000) {
    start = null;
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

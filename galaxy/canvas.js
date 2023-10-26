const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
console.log(canvas);

const ctx = canvas.getContext("2d");
ctx.fillText = "#FF0000";
ctx.fillText("THE MILKY WAY", 10 );

var chocolate = document.getElementById('ice');
var ctx = chocolate.getContext('2d');

//Le cornet.
ctx.beginPath();
ctx.moveTo(150,150);
ctx.lineTo(173,230);
ctx.lineTo(200,150);
ctx.fillStyle = '#aa6522';
ctx.fill();
ctx.closePath();

//La boule de glace.
ctx.beginPath();
ctx.lineWidth='2';
ctx.fillStyle='#8a0908';
ctx.moveTo(150,150);
ctx.quadraticCurveTo(182,85,200,150);
ctx.fill();

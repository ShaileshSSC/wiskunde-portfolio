const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let points = [];

Init();

update();

function Init()
{
  for (var i = 0; i < 10; i++) {
    let puntje = {};
    puntje = new Point(randomGenerator(true),randomGenerator(false), 10, "green");
    points.push(puntje);
  }
}

function update()
{
  requestAnimationFrame(update);
  Clear();
  Draw();
}

function randomGenerator(hoogtebreedte)
{
  if (hoogtebreedte == true) {
    var x = Math.floor((Math.random() * 1500) + 100);
    return x;
  }
  if (hoogtebreedte == false) {
    var y = Math.floor((Math.random() * 600) + 100);
    return y;
  }
}

function Draw()
{
  for (var i = 0; i < points.length; i++) {
    points[i].draw(context, 8);
    points[i].drag();
    //points[i].distance(i);
  }
  context.beginPath();

  context.moveTo(points[0].x, points[0].y);
  for (var i = 0; i < points.length; i++) {

    context.lineTo(points[i].x, points[i].y);

  }

  context.closePath();

  context.stroke();

}



function Clear()
{
context.clearRect(0,0,canvas.width, canvas.height);
}

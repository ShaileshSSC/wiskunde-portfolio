const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var o = 0;

let points = [];

Init();

function Init()
{
  for (var i = 0; i < 4; i++)
  {
    var x = randomGenerator(true);
    var y = randomGenerator(false);
    let myPoint = new Point(x,y, 10,"yellow");
    points.push(myPoint);
  }
  update();
}


function update()
{
  requestAnimationFrame(update);
  Move();
  Clear();
  Teken();
}

function Move()
{
  if (Math.random()<0.01)
  {
    points[o].x = randomGenerator(true);
    points[o].y = randomGenerator(false);
    o++;
    if (o > points.length - 1)
    {
      o = 0;
    }
  }
}

function Clear()
{
    context.clearRect(0,0,canvas.width,canvas.height);
}

function Teken()
{
  for (var i = 0; i < points.length; i++)
  {
    points[i].draw(context);
    points[i].drawNumber(i);
  }
}

function ColorRandom()
{
  var r = Math.floor(Math.random() * 255) + 1;

  return r;
}

function sleep(milliseconds)
{
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
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

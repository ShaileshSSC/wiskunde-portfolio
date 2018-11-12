const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var o = 0;

let points = [];

var kleur = true;

Start();

function Start()
{
  var x = randomGenerator(true);
  var y = randomGenerator(false);
  makePoint(x,y);
  update();
}

function makePoint(x, y)
{
  let myPoint = new Connect(x, y, 15, "blue");
  points.push(myPoint);
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
    makePoint(randomGenerator(true),randomGenerator(false),0,0);
    kleur = false;
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
    points[i].draw(context, i, ColorRandom(), ColorRandom(), ColorRandom());
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

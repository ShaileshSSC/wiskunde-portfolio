const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var o = 0;

let points = [];


update();

function Init()
{
  for (var i = 0; i < 10; i++)
  {
    var x = randomGenerator(true);
    var y = 10;
    let myPoint = new Point(x,y, 15, "white");
    points.push(myPoint);
  }
}


function update()
{
  requestAnimationFrame(update);
  Move();
  Delete();
  Clear();
  Teken();
}

function showCoords(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  for (var i = 0; i < points.length; i++) {
    var pointx = points[i].x;
    var pointy = points[i].y;
    var distanceA = mouseX - pointx;
    var distanceB = mouseY - pointy;
    var distanceApositiv;
    var distanceBpositiv;
    if (distanceA  < 0) {
      distanceApositiv = distanceA * -1;
    }
    if (distanceB < 0) {
      distanceBpositiv = distanceB * -1;
    }
    if (distanceB > 0) {
      distanceBpositiv = distanceB;
    }
    if (distanceA > 0) {
      distanceApositiv = distanceA;
    }
    var distanceC = (distanceApositiv * distanceApositiv) + (distanceBpositiv * distanceBpositiv);
    var uitkomst = Math.sqrt(distanceC);
    if (uitkomst < 10) {
          console.log(points[i]);
          points.splice(i,1);
    }
  }
}

function CheckDistance()
{
}

function Delete()
{
  for (var j = 0; j < points.length; j++) {
    if (points[j].y > canvas.height) {
      points.splice(j, 1);
    }
  }
}

function Move()
{
  for (var i = 0; i < points.length; i++) {
    points[i].y += 2;
  }
}

function time() {

    Init();

    setTimeout(time, 1000);
}

time();

function Clear()
{
    context.clearRect(0,0,canvas.width,canvas.height);
}

function Teken()
{
  for (var i = 0; i < points.length; i++)
  {
    points[i].draw(context, 15);
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

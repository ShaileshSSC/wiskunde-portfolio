const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var o = 0;

let points = [];

Init();

function Init()
{
  for (var i = 0; i < 100; i++) {
    var x = randomGenerator(true);
    var y = randomGenerator(false);
    let kineticObject = {};
    kineticObject.point = new Point(x,y,15,"red");
    kineticObject.pos = new Vector2d(x,y);
    kineticObject.vel = new Vector2d(randomN(),0);
    kineticObject.acc = new Vector2d(0,0.5);
    points.push(kineticObject);
  }
  update();
}


function update()
{
  Clear();
  requestAnimationFrame(update);
  for (var i = 0; i < points.length; i++) {
    points[i].pos.add(points[i].vel);
    points[i].vel.add(points[i].acc);
    points[i].point.position(points[i].pos);
    if (points[i].pos.dx > canvas.width || points[i].pos.dx < 0)
    {
      points[i].vel.dx = -points[i].vel.dx;
    }
    if (points[i].pos.dy > canvas.height || points[i].pos.dy < 0)
    {
      points[i].vel.dy = -points[i].vel.dy + points[i].acc.dy;

    }
  }
    //kineticObject.point.draw(context, 0);
    for (var i = 0; i < points.length; i++) {
      points[i].point.draw(context);
      points[i].point.drawNumber(i);
            //points[i].point.distance(i);
    }
    console.log(points[0].vel);
}


function Clear()
{
    context.clearRect(0,0,canvas.width,canvas.height);
}

function ColorRandom()
{
  var r = Math.floor(Math.random() * 255) + 1;

  return r;
}

function randomN()
{
    var z = Math.floor((Math.random() * 1) + -1);
    return z;
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

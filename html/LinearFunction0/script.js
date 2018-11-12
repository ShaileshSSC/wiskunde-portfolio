const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"red");
let C = new Point(600,100,15,"yellow");
let D = new Point(500,400,15,"green");

let S = new Point(0,0,10,"white");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

A.drag();
C.drag();
D.drag();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  m.letTwoPointsDefineLine(C,D);
  l.slope = -1/m.slope;
  l.intercept = A.y - l.slope * A.x;
  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;

  l.draw(context);
  m.draw(context);


  A.draw(context);
  C.draw(context);
  D.draw(context);

  S.draw(context);

}

animate();

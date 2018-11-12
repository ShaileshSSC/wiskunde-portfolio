const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(800,100,15,"blue");
let B = new Point(300,500,15,"white");
let C = new Point(1000,500,15,"green");
let S = new Point(0,0,5,"white");
let AB = new Point(0,0,5,"grey");
let BC = new Point(0,0,5,"grey");
let AC = new Point(0,0,5,"grey");

let f = new LinearFunction(10,100);
let g = new LinearFunction(10,100);
let h = new LinearFunction(10,100);

let i = new LinearFunction(10,100);
let j = new LinearFunction(10,100);
let k = new LinearFunction(10,100);

A.drag();
B.drag();
C.drag();

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  f.letTwoPointsDefineLine(A,B);
  AB.x = (A.x + B.x)/2; AB.y = (A.y + B.y)/2;
  g.letTwoPointsDefineLine(B,C);
  BC.x = (B.x + C.x)/2; BC.y = (B.y + C.y)/2;
  h.letTwoPointsDefineLine(C,A);
  AC.x = (A.x + C.x)/2; AC.y = (A.y + C.y)/2;
  i.letTwoPointsDefineLine(A,BC);
  j.letTwoPointsDefineLine(C,AB);
  k.letTwoPointsDefineLine(B,AC);
  i.intercept = A.y - i.slope * A.x;
  S.x = i.intersection(j).x;
  S.y = i.intersection(j).y;

  f.draw(context);
  g.draw(context);
  h.draw(context);
  i.draw(context);
  j.draw(context);
  k.draw(context);

  A.draw(context);
  B.draw(context);
  C.draw(context);
  S.draw(context);
  AB.draw(context);
  BC.draw(context);
  AC.draw(context);

}

animate();

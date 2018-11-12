const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(450,98,15,"purple");
let C = new Point(700,200,15,"yellow");
let D = new Point(500,400,15,"blue");

let S = new Point(0,0,5,"grey");
let ST = new Point(0,0,5,"grey");
let STA = new Point(0,0,5,"grey");
let SNIJ = new Point(0,0,5, "purple");

let l = new LinearFunction(1,1);
let l2 = new LinearFunction(1,1);
let l3 = new LinearFunction(1,1);


let m = new LinearFunction(1,1);
let n = new LinearFunction(1,1);
let o = new LinearFunction(1,1);

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
  n.letTwoPointsDefineLine(A,C);
  l2.slope = -1/n.slope;
  l2.intercept = D.y - l2.slope * D.x;
  ST.x = l2.intersection(n).x;
  ST.y = l2.intersection(n).y;
  o.letTwoPointsDefineLine(A,D);
  l3.slope = -1/o.slope;
  l3.intercept = C.y - l3.slope * C.x;
  STA.x = l3.intersection(o).x;
  STA.y = l3.intersection(o).y;
  l.intercept = A.y - l.slope * A.x;
  SNIJ.x = l.intersection(l2).x;
  SNIJ.y = l.intersection(l2).y;

  l.draw(context, 0.4);
  l2.draw(context, 0.4);
  l3.draw(context, 0.4);
  m.draw(context, 1);
  n.draw(context, 1);
  o.draw(context, 1);


  A.draw(context, 1);
  C.draw(context, 1);
  D.draw(context, 1);

  S.draw(context, 1);
  ST.draw(context, 1);
  STA.draw(context, 1);
  SNIJ.draw(context, 1);

}

animate();

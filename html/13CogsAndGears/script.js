const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let cog = new Image();
cog.src = "gear1.png";
cog.rotation = 0;

cog.addEventListener('load',()=>{
  animate();

})



function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  context.save();
  context.translate(400,300);
  context.rotate(cog.rotation);
  context.drawImage(cog,-0.5*cog.width,-0.5*cog.height);
  context.restore();

  context.save();
  context.translate(200,200);
  context.rotate(-cog.rotation);
  context.drawImage(cog,-0.5*cog.width,-0.5*cog.height);
  context.restore();
  cog.rotation += 0.01;
}

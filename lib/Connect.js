class Connect {
  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
  }


  draw(context, number, r , g , b)
  {

    var oldindex = number - 1;

    context.beginPath();
    context.fillStyle= "rgb(" + r + "," + g + "," + b + ")";

    context.lineWidth = 3;

    if (number > 0) {
      context.moveTo(points[oldindex].x,points[oldindex].y);
    }

    context.lineTo(this.x,this.y);

    context.lineTo(points[0].x,points[0].y);

    context.fill();

    context.stroke();

    context.closePath();


        context.beginPath();

        context.fillStyle= "rgb(" + this.r + "," + this.g + "," + this.b + ")";

        context.arc(this.x,this.y,10,0,2*Math.PI);

        context.lineWidth=3;

        context.stroke();

        context.fill();

        context.closePath();

        //Font
        context.beginPath();

        context.fillStyle="black";

        context.font = "20px Arial";

        context.fillText(number,this.x - 5,this.y - 15);

        context.fill();

        context.closePath();


  }
}

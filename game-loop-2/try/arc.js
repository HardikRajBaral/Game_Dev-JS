class Arc {
  constructor(ctx) {
    this.ctx = ctx;
    this.position = {
      x: 10,
      y: 0,
    };

    this.radius = 25
    this.color = "red"
    this.speed = 10;
    this.direction ={
      x:1,
      y:1
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(
      this.position.x,  
      this.position.y,
      this.radius,
      0,
      Math.PI*2
    
    );
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    this.ctx.beginPath()
    this.ctx.moveTo(0,0)
    this.lineTo(this.position.x,this.position.y)
    this.ctx.stroke()
  
  }
 

  update() {
    this.position.x=this.position.x + this.speed *this.direction.x;
    this.position.y=this.position.y + this.speed *this.direction.y;
    this.ctx.beginPath()
    this.ctx.moveTo(0,0)
    this.ctx.lineTo(this.position.x,this.position.y)
    this.ctx.stroke()
    if(this.position.x+this.radius>=this.ctx.canvas.width || this.position.x==0){
     this.speed
    }
    if(this.position.y+this.radius>=this.ctx.canvas.height || this.position.y==0){
      this.direction.y=-this.direction.y
    }
    
    const distance =document.getElementById("distance")
    const calcDistance=Math.sqrt(this.position.x**2+this.position.y**2)
    distance.textContent=calcDistance.toFixed(2)

  }
}

export default Arc;

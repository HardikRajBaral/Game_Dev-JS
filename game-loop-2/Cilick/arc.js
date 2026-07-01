class Arc {
  constructor(ctx,x,y) {
    this.ctx = ctx;
    this.position = {
      x,
      y
    };

    this.radius = 25
    this.color = "red"
    this.speed = 10;
    this.direction ={
      x:0,
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

   
  
  }
 

  update() {

    this.position.y=this.position.y + this.speed *this.direction.y;
    
    if(this.position.y+this.radius>=this.ctx.canvas.width || this.position.y==0){
      this.speed=0
    }
    
    
    

  }
}

export default Arc;

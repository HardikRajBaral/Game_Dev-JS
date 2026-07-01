    const DIRECTION =[1,-1]
    const COLOR=["red","green","blue","yellow","purple","orange","pink","brown","gray","cyan","magenta","lime","teal","navy","maroon","olive","silver","gold","beige","coral","crimson","indigo","ivory","khaki","lavender","salmon","tan","violet","azure","burgundy","charcoal","fuchsia","jade","peach","plum","ruby","sapphire","topaz","amber","cerulean","emerald","periwinkle","rose","sepia","turquoise"]
class Box {
  constructor(ctx,x,y) {
    this.ctx = ctx;
    this.position = {
      x: x,
      y: y,
    };

    this.size = {
      width: 50,
      height: 50,
    };

    this.color = COLOR[Math.floor(Math.random()*COLOR.length)];
    this.speed = 0.5;
    this.direction ={
      x:DIRECTION[Math.floor(Math.random()*DIRECTION.length)],
      y:DIRECTION[Math.floor(Math.random()*DIRECTION.length)]
    }
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
    this.ctx.fillStyle = this.color;
    this.ctx.fill()

  }

  update() {
    this.position.x=this.position.x + this.speed *this.direction.x;
    this.position.y=this.position.y + this.speed *this.direction.y;
    if(this.position.x+this.size.width>=this.ctx.canvas.width || this.position.x==0){
      this.direction.x=-this.direction.x
    }
    if(this.position.y+this.size.height>=this.ctx.canvas.height || this.position.y==0){
      this.direction.y=-this.direction.y
    }

  
  }
}

export default Box;

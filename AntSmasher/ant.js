
const DIRECTIONS = [-1,1]
class Ant{
    constructor(x,y){
        this.x=x
        this.y=y
        this.width=50
        this.height=50
        this.color="red"
        this.directionX=DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)]
        this.directionY=DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)]
        this.speedX=1
        this.isDead=false
        this.smash=new Audio("./pichitth.ogg")
        this.image=new Image()
        this.image.src="./LPC_Spiders/spider02.png"
        this.spiderIndex=0

        
    }
    get left(){
        return this.x
    }
    get right(){
        return this.x+this.width
    }
    get top(){
        return this.y
    }
    get bottom(){
        return this.y+this.height
    }
    
    draw(ctx){
        ctx.beginPath()
        ctx.drawImage(this.image,this.spiderIndex*64,0*64,64,64,this.x,this.y,this.width,this.height)
        // ctx.fillStyle=this.color
        // ctx.fillRect(this.x,this.y,this.width,this.height)
        // ctx.closePath()
    }
    isPointingAtMe(mouseX,mouseY){
        if(this.isDead){
            return
        }
        if(mouseX > this.left && mouseX < this.right && this.top < mouseY && this.bottom > mouseY){
            this.speedX=0
            this.speedY=0
            this.smash.play()
            this.isDead=true
        }

    }
    update(){
        this.x+=this.speedX * this.directionX
        this.y+=this.speedX * this.directionY

    }
    checkBorder(canvas){
        if(this.right>canvas.width|| this.left<0){
            this.directionX*=-1
        }
        if(this.top<0||this.bottom>canvas.height){
            this.directionY*=-1
        }

    }
}

export default Ant
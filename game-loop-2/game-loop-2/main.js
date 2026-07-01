import Box from "./box.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



const boxes=[]
for(let i=0;i<50;i++){
    let x=Math.floor(Math.random()*(canvas.width-100)+50)
    let y=Math.floor(Math.random()*(canvas.height-100)+50)
    boxes.push(new Box(ctx,x,y))
    console.log(boxes)
}

const gameLoop = () => {
    requestAnimationFrame(gameLoop)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i=0;i<50;i++){
        boxes[i].update()
        boxes[i].draw();
    }
}
gameLoop()
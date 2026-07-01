import Arc from "./arc.js";

const canvas =document.getElementById("canvas")
const ctx = canvas.getContext('2d')


const arc =new Arc(ctx)

const gameLoop=()=>{
    requestAnimationFrame(gameLoop)
    ctx.clearRect(0,0,canvas.width,canvas.height)
    arc.update()
    arc.draw()
}

gameLoop()

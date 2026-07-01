import Arc from "./arc.js";

const canvas =document.getElementById("canvas")
const ctx = canvas.getContext('2d')
let Arcs=[]

canvas.addEventListener("click",(event)=>{
    Arcs.push(new Arc(ctx,event.x,event.y))
    console.log(Arcs)
})
function gameLoop(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        for(let i=0;i<Arcs.length;i++){
            Arcs[i].update()
            Arcs[i].draw()
        }
        requestAnimationFrame(gameLoop)
    }
    
gameLoop()



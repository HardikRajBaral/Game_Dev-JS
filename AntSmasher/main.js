import Ant from "./ant.js"

const canvas = document.getElementById('canvas')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
const ctx =canvas.getContext('2d')
const ants = []


for(let i=0;i<5;i++){
    let x=Math.floor(Math.random()*(canvas.width-100)+50)
    let y=Math.floor(Math.random()*(canvas.height-100)+50)

    ants.push(new Ant(x,y))
}


function gameLoop(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i = 0; i<ants.length; i++){
        for(let j = 0; j<ants.length; j++){
            const ant1 = ants[i];
            const ant2 = ants[j];
            if(ant1.right>ant2.left&& ant1.left<ant2.right && ant1.bottom>ant2.top &&ant1.top<ant2.bottom){
        
            ant1.directionX *= -1
            ant1.directionY *= -1
            ant2.directionX *= -1
            ant2.directionY *= -1
        }
        }
        ants[i].checkBorder(canvas)
        ants[i].update()
        ants[i].draw(ctx)   
    }
    requestAnimationFrame(gameLoop)

}
gameLoop()

canvas.addEventListener('click',function(event){
    for(let i=0;i<ants.length;i++){
        ants[i].isPointingAtMe(event.x,event.y)
    }
})

setInterval(function(){

    for(let i=0;i<ants.length;i++){
        ants[i].spiderIndex++
        if(ants[i].spiderIndex>2)[
            ants[i].spiderIndex=0
        ]
    }
},100)
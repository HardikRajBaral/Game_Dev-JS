const canvas= document.getElementById('canvas');
const ctx= canvas.getContext('2d')

// ctx.beginPath()
// ctx.rect(0,0,100,100)
// ctx.fillStyle='red'
// ctx.fill()

// ctx.beginPath()
// ctx.arc(200,200,50,0,Math.PI*2)
// ctx.strokeStyle='blue'
// ctx.stroke()


// ctx.beginPath()
// ctx.moveTo(0,0)
// ctx.lineTo(300,300)
// ctx.strokeStyle="green"
// ctx.stroke()

// ctx.beginPath()
// ctx.moveTo(300,0)
// ctx.lineTo(0,300)
// ctx.stroke()

ctx.beginPath()
ctx.rect(50,50,100,200)
ctx.fillstyle="black"
ctx.fill()

ctx.beginPath()
ctx.rect(75,250,50,40)
ctx.fillstyle="black"
ctx.fill()

ctx.beginPath()
ctx.arc(100,100,20,0,Math.PI*2)
ctx.fillStyle='red'
ctx.fill()

ctx.beginPath()
ctx.arc(100,150,20,0,Math.PI*2)
ctx.fillStyle='blue'
ctx.fill()


ctx.beginPath()
ctx.arc(100,200,20,0,Math.PI*2)
ctx.fillStyle='green'
ctx.fill()



// class Box{
//     constructor(x,y){
//         this.x=x,
//         this.y=y,
//         this.width=100,
//         this.height=100
//     }

//     draw(  colorIndex){
//         ctx.beginPath()
//         ctx.rect(this.x,this.y,this.width,this.height)
//         ctx.fillStyle=arr[colorIndex]  
//         ctx.fill()
//     }
// }
// const arr=['red','blue','green','yellow','pink','purple','orange','brown','black','grey']
// const boxes=[]
// for(let i=0;i<10;i++){
    
//     const x=Math.floor(Math.random()*300)
//     const y=Math.floor(Math.random()*300)
//     boxes.push(new Box(x,y))
// }
// console.log(boxes)

// for(let i=0;i<boxes.length;i++){
//     const colorIndex=Math.floor(Math.random()*arr.length)
//     boxes[i].draw(colorIndex)
// }

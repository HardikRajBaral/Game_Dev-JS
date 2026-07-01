// const array=['Rock',"Paper","Sissor"]
// console.log(array[Math.floor(Math.random()*array.length)])
const random=(max=1280,min=1024)=>{
    return Math.floor(Math.random()*(max-min)+min)
}
let x =random(500,5)

let y=random(500,5)

console.log(`the random position of enemy is (${x},${y})`)
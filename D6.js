const readline =require('readline')

const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const array=['R',"P","S"]
let index=array[Math.floor(Math.random()*array.length)]


input.question("Choose form S /P /R : ",(ans)=>{
    if (index==ans){
        console.log("   Draw  ") 
    }
    else if(ans=="P"&&index =="R" || ans=="R"&&index=="S" ||ans=="S"&& index=="P"){
        console.log("   Hurray !!!!,  YOU WIN  !!! ")

    }
    else{
        console.log("  Computer WINS !!!  ")
    }
    input.close()
})
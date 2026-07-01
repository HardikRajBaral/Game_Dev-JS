//array
// const arr =[1,2,3,4]
// console.log('default array',arr)
//read the data form the array
// arr.push(5)
// arr.pop()
// arr.shift()
// arr.unshift(0)
// console.log('updated array',arr)

// const nums=[1,2,3,4]
// let sum=0
// for (let i=0; i<nums.length;i++){
//     sum =  sum + nums[i];
// }
// console.log(sum);


// const arr=[5,50,15,7,1]
// let h=arr[0]
// for (let i=0 ;i<arr.length;i++){
    
//     if (h<arr[i]){
//         h=arr[i]
//     }
// }
// console.log(h)




// const arr =[5,3,2,5,1]
// let r=0
// let h=arr[0]
// for(let i=0 ;i<arr.length;i++){
//     for (let j=i+1;j<arr.length;j++){
//         if (arr[i]===arr[j]){
//             r=arr[i]
//         }
//     }
// }
// console.log("duplicte number",r)



//object
// let student={
//     name:'hardik',
//     age:21,
//     sem:5,
//     address:{
//         city:"kathmandu",
//         street:"kamalpokhari"
//     },
// }
// student.address.city="chitwan"
// console.log(student)


const game = {
  title: "Legends of Aether",
  genre: "Action RPG",
  version: "1.4.2",
  player: {
    username: "DragonSlayer",
    level: 27,
    health: 180,
    mana: 90,
    stats: {
      strength: 42,
      agility: 33,
      intelligence: 25,
    },
    inventory: {
      gold: 1250,
      items: [
        {
          id: "w001",
          name: "Flame Sword",
          type: "weapon",
          damage: 45,
          attributes: {
            fire: 12,
            ice: 0,
          },
        },
        {
          id: "a001",
          name: "Guardian Shield",
          type: "armor",
          defense: 30,
          attributes: {
            reflect: 5,
          },
        },
      ],
    },
    quests: [
      {
        id: "q010",
        name: "Rescue the Lost Prince",
        completed: false,
        rewards: {
          gold: 300,
          xp: 1200,
        },
      },
      {
        id: "q011",
        name: "Slay the Forest Dragon",
        completed: false,
        rewards: {
          gold: 800,
          xp: 3000,
          itemReward: "Dragon Scale Shield",
        },
      },
    ],
  },
  world: {
    map: "Eldoria",
    regions: [
      {
        name: "Crystal Valley",
        enemies: ["Slime", "Golem", "Crystal Wolf"],
      },
      {
        name: "Shadow Forest",
        enemies: ["Dark Elf", "Forest Dragon", "Shadow Beast"],
      },
    ],
  },
  settings: {
    difficulty: "hard",
    graphics: {
      resolution: "1920x1080",
      quality: "high",
    },
    audio: {
      music: 70,
      effects: 80,
      voice: 65,
    },
  },
};
console.log(game.settings.graphics.resolution)
game.settings.audio.voice=88
console.log(game.settings.audio.voice)
console.log(game.player.inventory.gold.toString())
for (let i=0;i<game.player.quests.length;i++){
    console.log(game.player.quests[i].name)
}

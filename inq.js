console.clear();

import inquirer from "inquirer";
// import Kitchen from "./rooms.js";
// import Breakroom from "./rooms.js";
//module.imports = {
//   rooms.js
//}

export const getName = async () => {
    let {userName} = await inquirer.prompt({
     name: `userName`,
     type: `input`,
     message: `What is your name?`,
    })
    return userName
 }

 export const getShip = async () => {
    let {ship} = await inquirer.prompt({
     name: `ship`,
     type: `input`,
     message: `What is your ship called?`
    })
    return ship
 }

 export const getKitchen = async () =>{ 
   let {Kitchen} = await inquirer.prompt ({
   name: `Kitchen`,
   type: `input`,
   message: `the kitchen is a mess dishes have shattered and the broken shards are strewn about all ocer the floor. \n
   The rations have been spilled, resulting in large puddles of liquid and mounds of food. \n
   Smoke is billowing out from underneath the door to your left, and the one in front of you \n
   There is a delicious cake on the counter. It is a chocolate gateau with chocolate curls and a strawberry on top of it.\n`,
  
   })
  }
  
  export const getBreakroom = async () => {
   let {Breakroom} = await inquirer.prompt ({
      name: `Breakroom`,
      type: `input`,
      message: `hello`
   })
  }

 export const selectType = async () => {
   let userChoice = await inquirer.prompt({
   name: `choice`,   
   type: `list`,
   message: `you can either enter the Breakroom or the Kitchen."`,
   choices : [ `Breakroom` , `Kitchen `],
   })

   
 }
 
//   .then((answers)=>{
//      if(answers.selectType === "Breakroom"){
//         console.log(`vfgsdga`)
//        } else if(answers.selectType === "Kitchen"){
//          console.log(`hgfhdgf`)
//        }
//       })


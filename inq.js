console.clear();

import inquirer from "inquirer";


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

 export const selectType1 = async () => {
   let choice1 = await inquirer.prompt({
   name: `choice1`,   
   type: `list`,
   message: `you can either enter the Breakroom or the Kitchen."`,
   choices : [ `Breakroom` , `Kitchen`],
   })
   return choice1.choice1
   
 }
 
 export const selectType2 = async () => {
   let choice2 = await inquirer.prompt({
   name: `choice2`,   
   type: `list`,
   message: `you can either Go to the crop room or the oxygen storage room."`,
   choices : [ `Crop Room` , `Oxygen Storage Room`],
   })
   return choice2.choice2
   
 }

 export const selectType3 = async () => {
   let choice3 = await inquirer.prompt({
   name: `choice3`,   
   type: `list`,
   message: `you can either enter the Toilet or the Bunks."`,
   choices : [ `Toilet` , `Bunks`],
   })
   return choice3.choice3
   
 }



import inquirer from "inquirer"

export const getName = async () => {
    let {userName} = await inquirer.prompt({
     name: `userName`,
     type: `input`,
     message: `What is your name?`
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

 export const selectType = async () => {
   let {choice} = await inquirer.prompt({
   name: `choice`,   
   type: `list`,
   message: `you can either go left or go right`,
   choices : [ `go left` , `go right `],
   })
   return choice
}
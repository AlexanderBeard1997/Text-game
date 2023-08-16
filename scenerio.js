import inquirer from "inquirer";

// export const selectType = async () => {
//     let choice = await inquirer.prompt({
//     name: `choice`,   
//     type: `list`,
//     message: `you can either enter the Breakroom or the Kitchen."`,
//     choices : [ `Breakroom` , `Kitchen`],
//     })
//     return choice.choice
//   }
 
//   export const selectType2 = async () => {
//      let choice = await inquirer.prompt({
//      name: `choice`,   
//      type: `list`,
//      message: `you can either enter the Toilet or the Bunks."`,
//      choices : [ `Toilet` , `Bunks`],
//      })
//      return choice.choice
//    }
 
//    export const selectType3 = async () => {
//      let choice = await inquirer.prompt({
//      name: `choice`,   
//      type: `list`,
//      message: `you can either enter the Farm or the Life Support."`,
//      choices : [ `Farm` , `Life Support`],
//      })
//      return choice.choice
     
//    }
//let kitchen


export const kitchen = async () => {
    let {kitchen} = await inquirer.prompt({
    name : "Kitchen",
    message: `The kitchen is a mess. Dishes have shattered and the broken shards are strewn about all over the floor. \n
    The rations have been spilled, resulting in large puddles of liquid and mounds of food. \n
    Smoke is billowing out from underneath the door to your left, and the one in front of you. \n
    There is a delicious cake on the counter. It is a chocolate gateau with chocolate curls and a strawberry on top of it.`,
    choices: [`Farm`, `Life Support`, `Eat the cake`],
    returns: this.choices + "pick one of the choices"
    })}
    

export const breakroom = {
    name : "Breakroom",
    message: `The Breakroom is small; it has enough furnishings for a single person.\n
    There is a table where spare equipment has been discarded haphazardly. \n
    There is a door to the left leading to a small washroom, and a door to the right. There is a panel on the wall - it looks broken.`,
    choices: [`Search`, `Washroom`, `Panel`],
    returns: function() {
        return this.choices + "pick one of the choices";
    }
};

// also need breakRoom in the same format as the kitchen

//function that will get the user input and display relevent room



let userChoice = inquirer.prompt("Do you want to go to the Kitchen or Breakroom?")
if ((userChoice) === Kitchen.name) {
    Kitchen()
} else if ((userChoice) === breakroom.name) {
    Breakroom()
} else { console.log("error") }


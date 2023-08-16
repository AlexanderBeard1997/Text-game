console.clear();

import inquirer from "inquirer";


export const getName = async () => {
  let { userName } = await inquirer.prompt({
    name: `userName`,
    type: `input`,
    message: `What is your name?`,
  })
  return userName
}

export const getShip = async () => {
  let { ship } = await inquirer.prompt({
    name: `ship`,
    type: `input`,
    message: `What is your ship called?`
  })
  return ship
}

export const selectType = async () => {
  let choice = await inquirer.prompt({
    name: `choice`,
    type: `list`,
    message: `you can either enter the Breakroom or the Kitchen."`,
    choices: [`Breakroom`, `Kitchen`],
  })
  return choice.choice
}

export const selectType2 = async () => {
  let choice = await inquirer.prompt({
    name: `choice`,
    type: `list`,
    message: `you can either enter the Toilet or the Bunks."`,
    choices: [`Toilet`, `Bunks`],
  })
  return choice.choice
}

export const selectType3 = async () => {
  let choice = await inquirer.prompt({
    name: `choice`,
    type: `list`,
    message: `you can either enter the Farm or the Life Support."`,
    choices: [`Farm`, `Life Support`],
  })
  return choice.choice

}


export const Kitchen = () => {
  console.log(`the kitchen is a mess dishes have shattered and the broken shards are strewn about all ocer the floor. `),
    console.log(`The rations have been spilled, resulting in large puddles of liquid and mounds of food.`),
    console.log(`Smoke is billowing out from underneath the door to your left, and the one in front of you`),
    console.log(`There is a delicious cake on the counter. It is a chocolate gateau with chocolate curls and a strawberry on top of it.`)
  selectType3()
  return Kitchen
}

export const Breakroom = () => {
  console.log(`The Break Room is small; it has enough furnishings for a single person.`),
    console.log(`There is a table where spare equipment has been discarded haphazardly.`),
    console.log(`there is a door to the left leading to a small washroom it and a door on the right the panel looks broken `)
  selectType2()
  return Breakroom
}
export const cake = () => {
  console.log('Die Horribly You eat too much cake as it is irresistibly delicious. Your stomach bursts, killing you instantly') 
  console.log("the cake was a lie")
  return cake
}
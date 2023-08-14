console.clear()
import { getName, getShip,selectType } from "./inq.js"

const start = async () => {
    console.log(`welcome who are you?`)
    let userName = await getName()
    let shipName = await getShip()
    console.log(`"You are ${userName} you are the captain of the SSV ${shipName}.`)
    console.log(`You awaken at the console of your ship red lights flash from every corner of the room. The controls are not responding, and smokeis filtering in through the door.`)
    console.log(`an alarm blares sending a ringing straight through your ears, reverberating throughout your spinal cord.`)
    console.log(`You enter into the hallway and see the doors to the engine room have sealed shut. You have two paths; to the left, the kitchen;  to the right, the Breakroom. What will you do?`)
}

start()

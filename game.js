console.clear()
import * as inq from "./inq.js";
import * as rooms from "./rooms.js";
import * as classes from "./classes.js";

class Room2 {
    constructor() {
        this.oxygen = 100,
        this.temp = 100,
        this.fire = 0,
        this.cryoFluid = 100,
        this.fuel = 100,
        this.time = 100,
        this.cropIntegrity = 100,
        this.health = 100
    } stats2(){
        return console.table({
            oxygen: this.oxygen,
            temperature: this.temp,
            fire: this.fire,
            cryoFluid: this.cryoFluid,
            fuel: this.fuel,
            time: this.time,
            cropIntegrity: this.cropIntegrity,
            health: this.health
        })
    }
}

const x2 = new Room2(`x2`);

export const start = async () => {
    console.log(`welcome who are you?`)
    let userName = await inq.getName()
    let shipName = await inq.getShip()   
    console.log(`You are ${userName} you are the captain of the ${shipName}. \n
You awaken at the console of your ship red lights flash from every corner of the room. The controls are not responding,\n
An alarm blares away, sending a ringing straight through your ears, reverberating throughout your spinal cord. \n
You enter into the hallway and see the doors to the engine room have sealed shut. You have two paths; to the left, the kitchen;  to the right, the Breakroom. Whatever shall you do?`)
let userChoice = await inq.selectTypeStart()
if ((userChoice) === "Kitchen") {
    rooms.kitchen()
} else if ((userChoice) === "Breakroom") {
    rooms.breakroom()
} else { console.log("Error") }
}
     



const room1 = async () => {
    let userChoice2 = await inq.selectTypeKitchen()
    if ((userChoice2) === "Crop Farm") {
        rooms.cropfarm()
    } else if ((userChoice2) === "Oxygen Room") {
        rooms.oxygenRoom()
    } else { console.log("Error") }
}

x2.stats2();

start();
x2.stats2();
room1();
x2.stats2();

import inquirer from "inquirer";

export class Room {
    constructor() {
        this.oxygen = 100,
        this.temp = 100,
        this.fire = 0,
        this.cryoFluid = 100,
        this.fuel = 100,
        this.time = 100,
        this.cropIntegrity = 100,
        this.health = 100
    }

    oxygenCheck = () => {
        if (this.oxygen < 0) {
            this.oxygen = 0;
        } else if (this.oxygen > 100) {
            this.oxygen = 100;
        }
        if (this.oxygen === 0) {
            this.health -= 10;
        }
        if (this.oxygen === 0 && this.health === 0) {
            console.log("You suffocated to death.");
        }
    };

    tempCheck = () => {
        if (this.temp === 0) {
            this.health -= 10;
        } else if (this.temp === 0 && this.health === 0) {
            console.log("You froze to death.");
        }
    };

    roomFireCheck = () => {
        if (this.fire < 0) {
            this.fire = 0;
        } else if (this.fire > 100) {
           console.log( this.fire = 100);
        }

        if (this.fire === 100) {
            this.health -= 10;
        }
        if (this.fire === 100 && this.health === 0) {
            console.log("You burned to death.");
        }
    {
        stats = () => {
            return console.table({
                oxygen: this.oxygen,
                temperature: this.temp,
                fire: this.fire,
                cryoFluid: this.cryoFluid,
                fuel: this.fuel,
                time: this.time,
                cropIntegrity: this.cropIntegrity,
                health: this.health
            });
            }}

    };

  
    
    oxygenLevelDown() {(
    this.oxygen -= 10) 
     return this };       
}

const myRoom = new Room();

myRoom.oxygenCheck

console.log(myRoom.oxygen);

myRoom.oxygenLevelDown()

console.log(myRoom.oxygen);

//const x = new Room(`x`);
 //x.stats();






    //     if (Room.cryoFluid < 0) {
    //         this.cryoFluid = 0
    //     };
    //     if (Room.cryoFluid > 100) {
    //         this.cryoFluid = 100
    //     };
    //     if (Room.cryoFluid === 0) {
    //         console.log("The engine overheated and exploding, ripping the ship apart, causing you to die.")
    //     };
    //     if (Room.fuel < 0) {
    //         this.fuel = 0
    //     };
    //     if (Room.fuel < 0) {
    //         this.fuel = 0
    //     };
    //     if (Room.fuel > 100) {
    //         this.fuel = 100
    //     };
    //     if (Room.fuel === 0) {
    //         console.log("You have failed to fix the fuel tank leakage in time and no longer have enough fuel to reach the next source of fuel. You are now doomed to remain stuck in space until you run out of resrouces and die.")
    //     };
    //     if (Room.cropIntegrity > 100){
    //         this.cropIntegrity = 100
    //     };
    //     if (Room.cropIntegrity < 0){
    //         this.cropIntegrity = 0
    //     };
    //     if (Room.cropIntegrity === 0){
    //         console.log("The crops died, dooming you to slowly starve to death.")
    //     };
    //     if (Room.time < 0) {
    //     if (Room.time > 100) {
    //         this.time = 100
    //     };
    //     if (Room.time === 0) {
    //         console.log("You took too long to repair the engine. It is now beyond repair. You are stuck in the vast void of deep space doomed to run out of resources and die.")
    //     }
    // };


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
    x2.stats2();
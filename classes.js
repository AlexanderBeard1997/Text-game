export class room {
    constructor() {
        this.oxygen = 100;
        this.temp = 100;
        this.fire = 0;
        this.cryoFluid = 100;
        this.fuel = 100;
        this.time = 100;
        if (this.oxygen < 0) {
            this.oxygen = 0
        };
        if (this.oxygen > 100) {
            this.oxygen = 100
        };
        if (this.oxygen === 0) {
            console.log("You have run out of oxygen and suffocated to death.")
        };
        if (this.temperature === 0) {
            console.log("You have frozen to death.")
        };
        if (this.fire < 0) {
            this.fire = 0
        };
        if (this.fire > 100) {
            this.fire = 100
        };
        if (this.fire === 100) {
            console.log("You have burned to death.")
        };
        if (this.cryoFluid < 0) {
            this.cryoFluid = 0
        };
        if (this.cryoFluid > 100) {
            this.cryoFluid = 100
        };
        if (this.cryoFluid < 0) {
            this.cryoFluid = 0
        };
        if (this.cryoFluid === 0) {
            console.log("The engine overheated and exploding, ripping the ship apart, causing you to die.")
        };
        if (this.fuel < 0) {
            this.fuel = 0
        };
        if (this.fuel < 0) {
            this.fuel = 0
        };
        if (this.fuel > 100) {
            this.fuel = 100
        };
        if (this.fuel === 0) {
            console.log("You have failed to fix the fuel tank leakage in time and no longer have enough fuel to reach the next source of fuel. You are now doomed to remain stuck in space until you run out of resrouces and die.")
        }
        if (this.time < 0) {
            this.time = 0
        };
        if (this.time > 100) {
            this.time = 100
        };
        if (this.time === 0) {
            console.log("You took too long to repair the engine. It is now beyond repair. You are stuck in the vast void of deep space doomed to run out of resources and die.")
        }
    }
}
export class kitchen extends room {
    constructor()

    oxyLvDown() {
        this.oxygen -= 10
    };

    oxyLvUp() {
        this.oxygen += 10
    };

    tempDown() {
        this.tempDown -= 10
    };

    tempUp() {
        this.temp += 10
    };

    fireUp() {
        this.fire += 10
    };

    fireDown() {
        this.fire -= 10
    };

    cryoFluidUp() {
        this.cryoFluid += 10
    };

    cryoFluidDown() {
        this.cryoFluid -= 10
    };

    fuelDown() {
        this.fuel -= 10
    };

    timeDown() {
        this.time -= 10
    }

}
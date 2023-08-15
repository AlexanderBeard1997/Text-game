export  class room {
    constructor(){
    this.oxygen = 100;
    this.temp = 100;
    if (this.oxygen <=0 || this.temp <= 0 ){
        console.log("YOU ARE DEAD")
    }
}
}
export class kitchen extends room {
    constructor()

oxyLvDown() {
    this.oxygen -= 10
};

tempDown(){
    this.tempDown -=10
};

tempUp(){
    this.temp += 10 
};

oxyLvDown9(){
    this.oxygen += 10
}
}
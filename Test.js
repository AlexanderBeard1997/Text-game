console.clear();
class tamagotchi {
    constructor (name){
        this.name = name
        this.weight = 100
        this.age = 1
        this.health = 20
        this.happy = 100
        this.train = 0
        this.hunger = 100
    }
    hungry(){
        this.hunger -= 5;
        return this
    };
    play(){
        this.happy += 10
        this.hunger -= 15
        this.weight -= 10
        this.health +=5
        console.log(`${this.name} happiness and health up, hunger and weight down`)
        return this
    }
    medicine(){
        this.health += 10
        console.log(`${this.name} takes medicine`)
        return this
    }
    stats(){
        if ( this.hunger <= 0){
            this.health -= 55;
        } 
        if (this.health <=0 ){
            console.log("tamagochi died")
        } ;
        return console.table({
            name : this.name,
            health: this.health,
            hunger: this.hunger,
            happy: this.happy
        });
    }
}
  
// playing a game loses weight, increases happiness
//  play medicne, discipline, attention
class activities extends tamagotchi {
    constructor (name, happy){
    super (name, happy);
    
    }
    playgame() {
        this.happy += 10;
        this.hunger -= 5;
        this.train += 5;
        console.log(`${this.name} is happier`)
        return this
    }
    walks(){
        this.health -= 10
        this.hunger -=10;
        this.happy +=5;
        this.train +=10;
        console.log(`taking ${this.name} for a walk, ${this.name} is happier`)
        return this;
    }
    feeding(a) { 
    this.hunger -=a;
    if (this.hunger <= 0) {
        console.log(`${this.name} is full stop feeing him!`)
    } else { console.log (`${this.name} enjoyed that`)}
}
    
delay(b) {

        this.time +=b;

        { console.log (`${b} hours has passed`)}

        this.hunger -=20*b
}}
const hiro = new activities(`hiro`)


hiro.stats()
hiro.feeding(400)
hiro.stats()
hiro.delay(4)
hiro.stats()

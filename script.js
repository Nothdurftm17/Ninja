class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    // const ninja1 = new Ninja("Hyabusa");
    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(this.name)
        console.log(this.health)
        console.log(this.speed)
        console.log(this.strength)
    }

    drinkSake(){
        this.health += 10;
        console.log(`Health is now ${this.health}`)
    }
}
const ninja1 =new Ninja ("Matt", "100", "3", "3") 
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


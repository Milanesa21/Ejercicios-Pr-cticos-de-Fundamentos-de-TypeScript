class Carss {
    private make: string;

    constructor(make: string){
        this.make = make;
}

    drive(){
        console.log(`Driving a ${this.make}`);
    }

    getMake(){
        return this.make;
    }
}

class ElectricCar extends Carss {
    batteryLife: number;

    constructor(make: string, batteryLife: number){
        super(make);
        this.batteryLife = batteryLife;
    }

    charge(){
        console.log(`The ${this.getMake()} is charging`);
    }
}


const MyElectricCar = new ElectricCar('Tesla', 90);

MyElectricCar.drive();
MyElectricCar.charge();
console.log(MyElectricCar.getMake());
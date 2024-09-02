class Car {
    make: string; 

    constructor(make: string){
        this.make = make;
    }

    drive () {
        console.log(`Driving a ${this.make}`);
    }
}

const MyCar = new Car('Toyota');

MyCar.drive();
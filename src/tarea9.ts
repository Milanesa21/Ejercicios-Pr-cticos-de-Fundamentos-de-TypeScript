class Cars {
    private make: string; 

    constructor(make: string){
        this.make = make;
    }

    drive () {
        console.log(`Driving a ${this.make}`);
    }

    getMake(){
        return this.make
    }
}

const MyCars = new Cars('Toyota');

MyCars.drive();
console.log(MyCars.getMake());
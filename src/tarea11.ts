interface Shape{
    area(): number;
}

class Circle implements Shape{
    private radius: number;


    constructor(radius: number){
        this.radius = radius;
    }

    area(): number{
        return Math.PI * Math.pow(this.radius, 2);
    }
}


const myCircle= new Circle(10);
console.log(`El area del circulo es ${myCircle.area()}`);
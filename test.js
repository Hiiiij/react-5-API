.class Vehicle {
  constructor (color, model) {
    this.model=model;
    this.color=color;
  }
    show() {
        console.log (`${this.color} ${this.model}`)
    }

}


class Car extends Vehicle {
    constructor (color, model) {
      super (color, model);
    }
      show() {
          console.log (`My car is ${color} ${model}`)
      }
  
  }

class Moto extends Vehicle {
    constructor (color, model) {
      super (color, model);
    }
      show() {
          console.log (`My moto is ${this.color} ${this.model}`)
      }
  
  }

  const myMoto = new Moto("blue","bmw")
  myMoto.show()

  const myCar = new Car("gold","bmw")
  myCar.show();
  const myVehicle = new Vehicle("gold","bmw")
 myVehicle.show(); 
test
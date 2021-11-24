class Vehicle {
  public drive(): void {
    console.log("chugga chugga");
  }
  public honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

class Car extends Vehicle {
  drive() {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();

car.startDrivingProcess();
car.honk();

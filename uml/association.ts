// Aggregation
class Car {
  private _engine: Engine;
  constructor(engine: Engine) {
    this._engine = engine;
  }
}
class Engine {  }


// Composition
class Home {
  private _room: Room;
  constructor() {
    this._room = new Room();
  }
}
class Room {  }


// Dependency
class Person {
    hasRead(book:Book){
          
    }
}
class Book {  }

export default Room;
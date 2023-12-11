class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says greetings humans!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}.`;
  }

  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`;
  }

  update(obj) {
    if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("age")) {
      throw new Error(
        `TypeError, expected an argument with properties name and age`
      );
    }

    if (typeof obj !== "object") {
      throw new Error(
        `Expected argument of type object instead got ${typeof obj}`
      );
    }

    this.name = obj.name;
    this.age = obj.age;
    return true;
  }

  tryUpdate(obj) {
    try {
      return this.update(obj);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  greetAll(arrOfPersons) {
    if (arrOfPersons.length === 0) return [];
    if (!Array.isArray(arrOfPersons))
      throw new Error(
        `Expected argument of type Array instead got ${typeof arrOfPersons}`
      );
    return arrOfPersons.map((person) => person.sayHello());
  }
}

const me = new Person("jonas", 25);
const obj = { name: "card", job: 32 };
console.log(me.tryUpdate(obj));
module.exports = Person;

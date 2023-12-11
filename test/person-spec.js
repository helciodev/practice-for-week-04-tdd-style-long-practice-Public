const expect = require("chai").expect;

const { Person } = require("../problems/person");

describe(" class Person", () => {
  beforeEach(() => {
    person = new Person("helcio", 34);
    person2 = new Person("Laide", 23);
    person3 = new Person("Danilo", 25);
    person4 = new Person("Karina", 25);
    person5 = new Person("Elionora", 23);
  });

  it("person should have properties name and age", () => {
    expect(person).to.have.keys("name", "age");
  });
  describe("Person.sayHello()", () => {
    it(`should return a string of the Person instance's name and a greeting message`, () => {
      expect(person.sayHello()).to.equal("helcio says greetings humans!");
    });
  });

  describe("Person.visit(person2)", () => {
    it("should return a string with the instance person name visited person2 name", () => {
      expect(person.visit(person2)).to.equal("Helcio visited Laide");
    });
  });
  describe("Person.switchVisit(otherPerson)", () => {
    it("should invoke the visit method on otherPerson and pass the current instance of person as argument", () => {
      expect(person.switchVisit(person2)).to.equal("Laide visited Helcio");
    });
  });
  describe("Person.update(obj)", () => {
    let str = "string";
    let obj1 = { age: 34, job: "software engineer" };
    let obj2 = { name: "Bruno", age: 35 };
    it("should throw an error of type TypeError if argument is not of type object", () => {
      expect(() => person.update(str)).to.throw(Error);
    });
    it("should throw an error of type TypeError if argument does not have name and age properties", () => {
      expect(() => person.update(obj1)).to.throw(Error);
    });
    it("should update the person instance if the argument have name and age properties", () => {
      person.update(obj2);
      expect(person.name).to.equal(obj2.name);
      expect(person.age).to.equal(obj2.age);
    });
  });

  describe("Person.tryUpdate(obj)", () => {
    let obj1 = { age: 34, job: "software engineer" };
    let obj2 = { name: "Bruno", age: 35 };
    it("should return false if not updated successfully", () => {
      expect(person.update(obj1)).to.equal(false);
    });
    it("should return true if updated successfully", () => {
      expect(person.update(obj2)).to.equal(false);
    });
  });
  describe("Person.greetAll(arr)", () => {
    const person = new Person("Helcio", 34);
    const person2 = new Person("Laide", 23);
    const person3 = new Person("Danilo", 25);
    const person4 = new Person("Karina", 25);
    const person5 = new Person("Elionora", 23);
    let empty = [];
    let str = "string";
    const persons = [person, person2, person3, person4, person5];
    it("should return an array of with strings of each person instance saying a greeting", () => {
      expect(person.greetAll(persons)).to.equal([
        "Helcio says greetings humans!",
        "Laide says greetings humans!",
        "Danilo says greetings humans!",
        "Karina says greetings humans!",
        "Elionora says greetings humans!",
      ]);
    });
    it("should return and empty array if the argument array length is zero", () => {
      expect(person.greetAll(empty)).to.equal([]);
    });
    it("should throw an error of type TypeError if argument is not of type arr", () => {
      expect(() => person.greetAll(str)).to.throw(Error);
    });
  });
});

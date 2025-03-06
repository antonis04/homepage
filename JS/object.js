const person1 = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  sayHello: function() {
    console.log(`Hello my name is  ${this.name}  ${this.surname} and I am ${this.age} years old`);
  },
  getFullName: function() {
    return `${this.name} ${this.surname}`;
  }
};
const person2 = {
    name: 'Mark',
    surname: 'Smith',
    age: 30,
    sayHello: function() {
      console.log(`Hello my name is  ${this.name}  ${this.surname} and I am ${this.age} years old`);
    },
    getFullName: function() {
      return `${this.name} ${this.surname}`;
    }
  };
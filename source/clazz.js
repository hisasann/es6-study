class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return this.firstName + " " + this.lastName;
  }

  set name(name) {
    var names = name.split(" ");

    this.firstName = names[0];
    this.lastName = names[1];
  }
}

var blake = new Person("Blake", "Williams");
blake.name = "Blake Anderson"
console.log(blake.name);
function Auto(farbe, km, person) {
    this.Lackierung = farbe;
    this.KM_Stand = km;
    this.Person = person;
    this.fahren = addiere_KM;
    this.changePerson = function(newPerson) {
      this.Person = newPerson;
    };
    this.print = function() {
      console.log(`Farbe: ${this.Lackierung}`);
      console.log(`KM-Stand: ${this.KM_Stand}`);
      console.log(`Person: ${this.Person.firstName} ${this.Person.lastName}`);
    };
  }
  
  function addiere_KM(kilometer) {
    this.KM_Stand += kilometer;
  }
  
  // Person constructor function
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Creating an instance of the Person object
  const person1 = new Person('John', 'Doe');
  
  // Creating an instance of the Auto function with the Person object passed in
  const meinAuto = new Auto('Rot', 5000, person1);
  
  // Using the instance methods
  meinAuto.fahren(100);
  meinAuto.print();
  
  // Changing the person associated with the car
  const person2 = new Person('Jane', 'Smith');
  meinAuto.changePerson(person2);
  meinAuto.print();
  
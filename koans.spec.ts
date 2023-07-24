describe('TypeScript Koans - Test Suite 1', () => {
  it('type inference', () => {
    // Koan 1: TypeScript can infer the type of a variable
    const message = 'Hello, TypeScript!';

    // Failing Test 1: Uncomment the expect statement below and provide the expected type
    // expect(typeof message).toEqual();

    // Koan 2: TypeScript can also infer the type of variables based on their initial value
    const count = 42;

    // Failing Test 2: Uncomment the expect statement below and provide the expected type
    // expect(typeof count).toEqual();

    // Koan 3: TypeScript can infer multiple types for a union type
    const numberOrString: number | string = Math.random() > 0.5 ? 42 : 'forty-two';

    // Failing Test 3: Uncomment the expect statement below and provide the expected type
    // expect(typeof numberOrString).toEqual();

    // Koan 4: TypeScript can infer the type from the result of an arithmetic operation
    const result = 5 / 'a';

    // Failing Test 4: Uncomment the expect statement below and provide the expected type
    // expect(typeof result).toEqual();

    // Koan 5: TypeScript can infer the type when using isNaN function
    const nanCheck = isNaN(5 / 'a');

    // Failing Test 5: Uncomment the expect statement below and provide the expected type
    // expect(typeof nanCheck).toEqual();
  });
});

// Define an interface representing a user object
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  isAdmin?: boolean; // Optional property indicating admin status
}

describe('TypeScript Koans - Test Suite 2', () => {
  it('objects in TypeScript', () => {
    // Koan 1: Creating a user object
    const user: User = {
      id: 1,
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
      isAdmin: true,
    };

    // Failing Test 1: Uncomment the expect statements below and provide the expected values
    // expect(user.id).toEqual();
    // expect(user.name).toEqual();
    // expect(user.age).toEqual();
    // expect(user.email).toEqual();
    // expect(user.isAdmin).toEqual();
    // expect(user.address).toEqual();

    // Koan 2: Modifying object properties
    user.name = 'Jane Smith';
    user.age = 25;
    delete user.isAdmin;

    // Failing Test 2: Uncomment the expect statements below and provide the expected values
    // expect(user.name).toEqual();
    // expect(user.age).toEqual();
    // expect(user.isAdmin).toEqual();

    // Koan 3: Object methods
    const car = {
      make: 'Toyota',
      model: 'Corolla',
      year: 2022,
      getFullDetails(): string {
        return `${this.make} ${this.model} (${this.year})`;
      },
    };

    // Failing Test 3: Uncomment the expect statements below and provide the expected values
    // expect(car.make).toEqual();
    // expect(car.model).toEqual();
    // expect(car.year).toEqual();
    // expect(car.getFullDetails()).toEqual();
    // expect(car.getFullDetails()).toEqual('Honda Civic (2021)');

    // Koan 4: Object keys and values
    const student = {
      name: 'Alice',
      age: 22,
      major: 'Computer Science',
    };

    const keys = Object.keys(student);
    const values = Object.values(student);

    // Failing Test 4: Uncomment the expect statements below and provide the expected values
    // expect(keys).toEqual();
    // expect(values).toEqual();
    // expect(keys).toEqual(['name', 'age', 'major']);
    // expect(values).toEqual(['Alice', 22, 'Computer Science']);
  });
});

describe('TypeScript Koans - Test Suite 3', () => {
  it('arrays in TypeScript', () => {
    // Koan 1: Creating arrays
    const numbers: number[] = [1, 2, 3, 4, 5];
    const fruits: Array<string> = ['apple', 'banana', 'orange'];

    // Failing Test 1: Uncomment the expect statements below and provide the expected values
    // expect(numbers.length).toEqual();
    // expect(fruits[0]).toEqual();
    // expect(fruits[2]).toEqual();
    // expect(fruits[3]).toEqual();

    // Koan 2: Modifying arrays
    numbers.push(6);
    fruits[1] = 'grape';
    numbers.pop();
    fruits.splice(2, 1);

    // Failing Test 2: Uncomment the expect statements below and provide the expected values
    // expect(numbers.length).toEqual();
    // expect(numbers).toEqual();
    // expect(fruits.length).toEqual();
    // expect(fruits).toEqual();

    // Koan 3: Array methods
    const squares = numbers.map(num => num * num);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const evenNumbers = numbers.filter(num => num % 2 === 0);

    // Failing Test 3: Uncomment the expect statements below and provide the expected values
    // expect(squares).toEqual();
    // expect(sum).toEqual();
    // expect(evenNumbers).toEqual();

    // Koan 4: Combining arrays
    const moreNumbers: number[] = [7, 8, 9];
    const allNumbers = numbers.concat(moreNumbers);

    // Failing Test 4: Uncomment the expect statements below and provide the expected values
    // expect(allNumbers).toEqual();
    // expect(allNumbers.length).toEqual();

    // Koan 5: Using array spread
    const newNumbers = [0, ...numbers, 10];
    const newFruits = [...fruits, 'kiwi', 'watermelon'];

    // Failing Test 5: Uncomment the expect statements below and provide the expected values
    // expect(newNumbers).toEqual();
    // expect(newFruits).toEqual();
  });
});

describe('TypeScript Koans - Test Suite 4', () => {
  it('tuples in TypeScript', () => {
    // Koan 1: Creating tuples
    let point: [number, number] = [3, 5];
    let person: [string, number, boolean] = ['John Doe', 30, true];

    // Failing Test 1: Uncomment the expect statements below and provide the expected values
    // expect(point.length).toEqual();
    // expect(person[0]).toEqual();
    // expect(person[1]).toEqual();
    // expect(person[2]).toEqual();
    // expect(person[3]).toEqual();

    // Koan 2: Modifying tuples
    point[0] = 7;
    person[1] = 25;

    // Failing Test 2: Uncomment the expect statements below and provide the expected values
    // expect(point).toEqual();
    // expect(person).toEqual();

    // Koan 3: Tuple methods
    const namesAndAges: [string, number][] = [
      ['Alice', 28],
      ['Bob', 32],
      ['Charlie', 24],
    ];

    const firstPerson = namesAndAges[0];
    const secondPersonName = namesAndAges[1][0];
    const thirdPersonAge = namesAndAges[2][1];

    // Failing Test 3: Uncomment the expect statements below and provide the expected values
    // expect(firstPerson).toEqual();
    // expect(secondPersonName).toEqual();
    // expect(thirdPersonAge).toEqual();

    // Koan 4: Tuple in functions
    function getCoordinates(): [number, number] {
      return [2, 4];
    }

    const coordinates = getCoordinates();

    // Failing Test 4: Uncomment the expect statements below and provide the expected values
    // expect(coordinates).toEqual();
    // expect(coordinates.length).toEqual();
    // expect(coordinates[0]).toEqual();
    // expect(coordinates[1]).toEqual();
  });
});

// Define an enum representing days of the week
enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

describe('TypeScript Koans - Test Suite 5', () => {
  it('enums in TypeScript', () => {
    // Koan 1: Accessing enum values
    const today = DaysOfWeek.Wednesday;

    // Failing Test 1: Uncomment the expect statements below and provide the expected values
    // expect(today).toEqual();
    // expect(today).toEqual('Wednesday');
    // expect(today).toEqual(DaysOfWeek.Wednesday);

    // Koan 2: Using enums in switch statements
    let message: string;

    switch (today) {
      // @ts-expect-error
      case DaysOfWeek.Sunday:
        message = 'It\'s Sunday!';
        break;
      // @ts-expect-error
      case DaysOfWeek.Saturday:
        message = 'It\'s Saturday!';
        break;
      default:
        message = 'It\'s a weekday.';
    }

    // Failing Test 2: Uncomment the expect statements below and provide the expected values
    // expect(message).toEqual();
    // expect(message).toEqual('It\'s Wednesday!');
    // expect(message).toEqual('It\'s a weekday.');

    // Koan 3: Enum values with custom starting index
    enum CustomDaysOfWeek {
      Sunday = 1,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
    }

    const firstDay = CustomDaysOfWeek.Sunday;
    const secondDay = CustomDaysOfWeek.Monday;

    // Failing Test 3: Uncomment the expect statements below and provide the expected values
    // expect(firstDay).toEqual();
    // expect(secondDay).toEqual();

    // Koan 4: String enums
    enum Direction {
      Up = 'UP',
      Down = 'DOWN',
      Left = 'LEFT',
      Right = 'RIGHT',
    }

    const upDirection = Direction.Up;
    const downDirection = Direction.Down;

    // Failing Test 4: Uncomment the expect statements below and provide the expected values
    // expect(upDirection).toEqual();
    // expect(downDirection).toEqual();
    // expect(upDirection).toEqual('UP');
  });
});

// Define a simple function that adds two numbers
function add(a: number, b: number): number {
  return a + b;
}

// Define a function that takes a callback function as an argument
function doSomething(callback: () => void): void {
  console.log('Doing something...');
  callback();
}

// Define a function with optional and default parameters
function greet(name: string, greeting: string = 'Hello', age?: number): string {
  const greetingMessage = age ? `${greeting}, ${name}! You are ${age} years old.` : `${greeting}, ${name}!`;
  return greetingMessage;
}

describe('TypeScript Koans - Test Suite 6', () => {
  it('functions in TypeScript', () => {
    // Koan 1: Using the add function
    const result = add(2, 3);

    // Failing Test 1: Uncomment the expect statements below and provide the expected values
    // expect(result).toEqual();
    // expect(add(5, '2')).toEqual();
    // expect(add(10, 20, 30)).toEqual();

    // Koan 2: Using the doSomething function with a callback
    let callbackExecuted = false;
    doSomething(() => {
      callbackExecuted = true;
    });

    // Failing Test 2: Uncomment the expect statements below and provide the expected values
    // expect(callbackExecuted).toEqual();

    // Koan 3: Using the greet function
    const greeting1 = greet('Alice');
    const greeting2 = greet('Bob', 'Hi');
    const greeting3 = greet('Charlie', 'Hey', 28);

    // Failing Test 3: Uncomment the expect statements below and provide the expected values
    // expect(greeting1).toEqual();
    // expect(greeting2).toEqual();
    // expect(greeting3).toEqual();
  });
});

// Define a simple class with access modifiers
class Car {
  private make: string;
  protected model: string;
  public year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  public getMake(): string {
    return this.make;
  }

  protected getModel(): string {
    return this.model;
  }

  private getYear(): number {
    return this.year;
  }
}

// Define a subclass that extends the Car class
class SportsCar extends Car {
  private topSpeed: number;

  constructor(make: string, model: string, year: number, topSpeed: number) {
    super(make, model, year);
    this.topSpeed = topSpeed;
  }

  public getTopSpeed(): number {
    return this.topSpeed;
  }

  public getModelFromBaseClass(): string {
    // Failing Test 1: Uncomment the expect statement below and provide the expected value
    // expect(this.model).toEqual();
    return this.getModel();
  }

  public getYearFromBaseClass(): number {
    // Failing Test 2: Uncomment the expect statement below and provide the expected value
    // expect(this.year).toEqual();
    // @ts-expect-error
    return this.getYear();
  }

  private getMakeFromBaseClass(): string {
    // Failing Test 3: Uncomment the expect statement below and provide the expected value
    // expect(this.make).toEqual();
    return this.getMake();
  }
}

describe('TypeScript Koans - Test Suite 7', () => {
  it('classes and access modifiers in TypeScript', () => {
    // Koan 1: Using the Car class
    const car = new Car('Toyota', 'Corolla', 2022);

    // Failing Test 4: Uncomment the expect statements below and provide the expected values
    // expect(car.getMake()).toEqual();
    // expect(car.getModel()).toEqual();
    // expect(car.getYear()).toEqual();

    // Koan 2: Using the SportsCar subclass
    const sportsCar = new SportsCar('Ferrari', '488 GTB', 2023, 330);

    // Failing Test 5: Uncomment the expect statements below and provide the expected values
    // expect(sportsCar.getMake()).toEqual();
    // expect(sportsCar.getModelFromBaseClass()).toEqual();
    // expect(sportsCar.getYearFromBaseClass()).toEqual();
    // expect(sportsCar.getTopSpeed()).toEqual();

    // Failing Test 6: Uncomment the expect statement below and provide the expected value
    // expect(sportsCar.getModel()).toEqual();

    // Failing Test 7: Uncomment the expect statement below and provide the expected value
    // expect(sportsCar.getYear()).toEqual();

    // Failing Test 8: Uncomment the expect statement below and provide the expected value
    // expect(sportsCar.getMakeFromBaseClass()).toEqual();
  });
});



// Let's assume we have an interface representing a person
interface Person {
  name: string;
  age: number;
}

describe('TypeScript Koans - Test Suite 8', () => {
  it('type annotations', () => {
    // Koan 1: Type annotations can be used to specify the type of a variable explicitly
    let message: string;
    message = 'Hello, TypeScript!';

    // Failing Test 1: Uncomment the expect statement below and provide the expected type
    // expect(typeof message).toEqual();

    // Koan 2: Type annotations can be used for function parameters and return types
    function add(a: number, b: number): number {
      return a + b;
    }

    // Failing Test 2: Uncomment the expect statements below and provide the expected types
    // expect(typeof add(2, 3)).toEqual();
    // expect(typeof add('2', '3')).toEqual();
    // expect(typeof add(2, '3')).toEqual();

    // Koan 3: Type annotations can also be applied to object properties
    const person: Person = {
      name: 'John Doe',
      age: 30,
    };

    // Failing Test 3: Uncomment the expect statements below and provide the expected types
    // expect(typeof person.name).toEqual();
    // expect(typeof person.age).toEqual();
    // expect(typeof person.location).toEqual();

    // Koan 4: TypeScript can infer the return type when it's not explicitly annotated
    function greet(name: string) {
      return `Hello, ${name}!`;
    }

    // Failing Test 4: Uncomment the expect statement below and provide the expected type
    // expect(typeof greet('Alice')).toEqual();
    // expect(typeof greet(42)).toEqual();

    // Koan 5: TypeScript can infer the function type when assigned to a variable
    const calculateSquare = (x: number) => x * x;

    // Failing Test 5: Uncomment the expect statements below and provide the expected types
    // expect(typeof calculateSquare).toEqual();
    // expect(typeof calculateSquare(5)).toEqual();
    // expect(typeof calculateSquare('5')).toEqual();
  });
});

export interface Address {
  zip: number,
  city: string;
  places: string;
}

export interface Person {
  id: number
  lastName: string,
  firstName: string;
  age: number;
  addres: Address,
}

export interface PersonInterfaces {

  setId(id: number): void;
  getId(): number;

  setAddress(address: Address): void,
  getAddress(): Address,

  setLastName(lastname: string): void,
  getLastName(): string,

  setFirstName(firstname: string): void,
  getFirstName(): string,

  setAge(age: number): void;
  getAge(): number;

  getPerson(): Person;
}
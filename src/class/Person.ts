import { Person, PersonInterfaces, Address } from '../interfaces/PersonInterface';

export class PersonClass implements PersonInterfaces {

  private id: number = 0;
  private lastname: string = '';
  private firstname: string = '';
  private age: number = 0;
  private address: Address = { zip: 0, city: '', places: '' };

  setId(id: number) {
    this.id = id;
  }

  getId(): number {
    return this.id
  }

  setLastName(lastname: string): void {
    this.lastname = lastname;
  }

  getLastName(): string {
    return this.lastname;
  }

  setFirstName(firstname: string): void {
    this.firstname = firstname
  }

  getFirstName(): string {
    return this.firstname;
  }

  setAddress(address: Address): void {
    this.address = address;
  }

  getAddress(): Address {
    return this.address
  }

  setAge(age: number): void {
    this.age = age;
  }

  getAge(): number {
    return this.age
  }

  getPerson(): Person {
    return {
      id: this.id,
      addres: this.address,
      lastName: this.lastname,
      firstName: this.firstname,
      age: this.age
    }
  }
}

import { PersonClass } from '../class/Person';

describe('Person', () => {

  const TestPersonObject = {
    id: 1,
    addres: { zip: 69115, city: 'Heidelberg', places: 'Bergheim' },
    lastName: 'Schefer',
    firstName: 'andrej',
    age: 35
  }

  it('Is Person Object correct', () => {
    const person = new PersonClass();

    person.setId(1);
    person.setFirstName("andrej");
    person.setLastName('Schefer');
    person.setAge(35)
    person.setAddress({ zip: 69115, city: 'Heidelberg', places: 'Bergheim' })

    expect(person.getPerson()).toEqual(TestPersonObject);
  })
})
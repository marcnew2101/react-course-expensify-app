const person = {
  name: 'Marc',
  age: 36,
  location: {
    city: 'Boulder',
    state: 'Colorado'
  },
  temp: [
    'high winds',
    'low humidity',
    'high pressure'
  ]
};

const { name, age, location } = person;
const { city, state } = person.location;
const [ wind, humidity, pressure ] = person.temp;

console.log(`${name} is ${age} years old. They are from ${city}, ${state}.`);
console.log(`Local conditions are ${wind} with ${humidity} and ${pressure}.`);

var katzDeli = [];

function takeANumber(otherDeli, person) {
  otherDeli.push(person);
  return (`Welcome, ${person}. You are number ${otherDeli.length} in line.`)
}

var katzDeli = [];

function takeANumber(katzDeli, person) {
  katzDeli.push(person);
  return (`Welcome, ${person}. You are number ${katzDeli.length} in line.`)
}

function nowServing() {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeli[0]}`
  }

}

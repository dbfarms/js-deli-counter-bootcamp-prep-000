var katzDeli = [];

function takeANumber(katzDeli, person) {
  katzDeli.push(person);
  return (`Welcome, ${person}. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeli[0];
    katzDeli.splice(0,1);
    return "Currently serving " + name + ".";

  }

}

function currentLine(katzDeli) {
  var otherDeli=0;
  var line = {};
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    for (otherDeli < katzDeli.length)
      line += katzDeli.splice(otherDeli); 
    return "The line is currently: " + line;
  }
}

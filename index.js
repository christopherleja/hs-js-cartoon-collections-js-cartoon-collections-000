function dwarfRollCall(dwarves) { 
var listDwarves = []
  for(let i=0; i<dwarves.length; i++){
    listDwarves.push(`${i+1}. ${dwarves[i]} `)
}
  return listDwarves.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var uppercasePlaneteerCalls = [];
    for (let i=0; i<planeteerCalls.length; i++){
      var emphasis = "!"
      uppercasePlaneteerCalls.push(`${planeteerCalls[i]}${emphasis}`.toUpperCase())
    }
  return uppercasePlaneteerCalls
  }


function longPlaneteerCalls(words) {
  for (let i=0; i<words.length; i++){
    if (words[i].length > 4)
    return true
  }
    return false
} 

function findTheCheese (foods) {
  for (let i=0; i<foods.length; i++) {
  
  if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert" || foods[i] === 'swiss') {
  return foods[i];
  } 
} 
return "no cheese!";
}

function wordsWithB (words) {
  var wordsThatStartWithB = [];
  for (let i=0; i,words.length; i++){
  if (words[i][0] === 'b')  {  
    wordsThatStartWithB.push(words[i])}
}
return wordsThatStartWithB
}
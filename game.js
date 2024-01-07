let house = 0;
let factory = 0;
let hospital = 0;
let school = 0;
let university = 0;
let medicalSchool = 0;


let clockRunning = true;


var teams = [
  "Apex Aces",
  "Titan Tigers",
  "Quantum Quest",
  "Zenith Zephyrs",
  "Vanguard Vipers",
  "Nebula Nomads",
  "Ember Enigma",
  "Sonic Storm",
  "Celestial Sirens",
  "Pinnacle Panthers",
  "Mirage Monarchs",
  "Solar Sirens",
];



let gold = 200;

let goldHtml = document.getElementById("goldHtml");
let winState = document.getElementById("winState");
let firstTeam = document.getElementById("firstTeam");
let secondTeam = document.getElementById("secondTeam");
let winningTeam = document.getElementById("teamBetWins");
let counterPlus = document.getElementById("counterPlus");


let maxLevelReached = false;
let houseAlertShown = false;
let factoryAlertShown = false;
let hospitalAlertShown = false;
let schoolAlertShown = false;
let universityAlertShown = false;
let medicalSchoolAlertShown = false;


let win = "win";

let lose = "lose";


function setChange(event) {

    event.preventDefault();
    
    let houseChange = document.getElementById("house");
    let factoryChange = document.getElementById("factory");
    let hospitalChange = document.getElementById("hospital");
    let schoolChange = document.getElementById("school");
    let universityChange = document.getElementById("university");
    let medicalSchoolChange = document.getElementById("medicalSchool");

    let selectedProperty = document.getElementById("counterPlus").value;

    if (selectedProperty === "house") {
        house += 1;
        gold -= 5;
        goldHtml.innerHTML = "Gold: " + gold;   
    } else if (selectedProperty === "factory") {
        factory += 1;
        gold -= 30;
        goldHtml.innerHTML = "Gold: " + gold;
    } else if (selectedProperty === "hospital") {
        hospital += 1;
        gold -= 25;
        goldHtml.innerHTML = "Gold: " + gold;
    } else if (selectedProperty === "school") {
        school += 1;
        gold -= 10;
        goldHtml.innerHTML = "Gold: " + gold;
    } else if (selectedProperty === "university") {
        university += 1;
        gold -= 20;
        goldHtml.innerHTML = "Gold: " + gold;
    } else if (selectedProperty === "medicalSchool") {
        medicalSchool += 1;
        gold -= 25;
        goldHtml.innerHTML = "Gold: " + gold;
    }

    houseChange.innerHTML = "House: " + house;
    factoryChange.innerHTML = "Factory: " + factory;
    hospitalChange.innerHTML = "Hospital: " + hospital;
    schoolChange.innerHTML = "School: " + school;
    universityChange.innerHTML = "University: " + university;
    medicalSchoolChange.innerHTML = "Medical School: " + medicalSchool;

    if (gold < 0) {
        alert("You are not a good president \n You lose")
        window.location.href = "index.html";
    }

    


if (house >= 5 && factory >= 5 && hospital >= 5 && school >= 5 && university >= 5 && medicalSchool >= 5) {
  alert(`Congratulations! You have reached the maximum level for all properties`);
  gold += 20;
  goldHtml.innerHTML = "Gold: " + gold;
  maxLevelReached = true;
  clockRunning = false;
  clearInterval(timerRun);
  counterPlus.innerHTML = "You completed game";
}

if (house == 5 && !houseAlertShown) {
  gold += 8;
  goldHtml.innerHTML = "Gold: " + gold;
  houseAlertShown = true;
}

if (factory == 5 && !factoryAlertShown) {
  gold += 100;
  goldHtml.innerHTML = "Gold: " + gold;
  factoryAlertShown = true;
}

if (hospital == 5 && !hospitalAlertShown) {
  gold += 42;
  goldHtml.innerHTML = "Gold: " + gold;
  hospitalAlertShown = true;
}

if (school == 5 && !schoolAlertShown) {
  gold += 34;
  goldHtml.innerHTML = "Gold: " + gold;
  schoolAlertShown = true;
}

if (university == 5 && !universityAlertShown) {
  gold += 33;
  goldHtml.innerHTML = "Gold: " + gold;
  universityAlertShown = true;
}

if (medicalSchool == 5 && !medicalSchoolAlertShown) {
  gold += 42;
  goldHtml.innerHTML = "Gold: " + gold;
  medicalSchoolAlertShown = true;
}
    
}


function biggestGoldIncrease() {
  gold += 100;
  goldHtml.innerHTML = "Gold: " + gold;
}

function bigGoldIncrease() {
  gold += 50;
  goldHtml.innerHTML = "Gold: " + gold;
}

function goldIncrease() {
    gold += 10;
    goldHtml.innerHTML = "Gold: " + gold;
    
}

let timerRun;

timerRun = setInterval(goldIncrease,10000);
timerBigRun = setInterval(bigGoldIncrease,60000)
timerBiggestRun = setInterval(biggestGoldIncrease,180000)

function bet() {
    let userGuess = document.getElementById("roulette").value;
    let randomNumber = Math.floor(Math.random() * 4)+1;

    if (userGuess == randomNumber){
        gold += 40;
        winState.innerHTML = "You: " + win
    }else {
        gold -= 20;
      winState.innerHTML = "You: " + lose
      }
    goldHtml.innerHTML = "Gold: " + gold;
    if (gold < 0) {
      alert("You are not a good president \n You lose")
      window.location.href = "index.html";
  }
}


if (gold < 0) {
  alert("You are not a good president \n You lose")
  window.location.href = "index.html";
}

let startTime = new Date().getTime();

  function startStopwatch() {
  if (clockRunning == true) {
    timerRun = setInterval(updateDisplay, 10);
  } else {
    clearInterval(timerRun);
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = elapsedTime % 1000;

    const displayString = `${hours}:${padZero(minutes)}:${padZero(seconds)}.${padZeroMilliseconds(milliseconds)}`;
    alert(`Congrats you finished the game in ${displayString}`);
  }
}


function updateDisplay() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;

  const displayString = `${hours}:${padZero(minutes)}:${padZero(seconds)}.${padZeroMilliseconds(milliseconds)}`;
  document.getElementById('display').innerText = displayString;
}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

function padZeroMilliseconds(value) {
  if (value < 10) {
    return `00${value}`;
  } else if (value < 100) {
    return `0${value}`;
  } else {
    return value;
  }
}

let house = 0;
let factory = 0;
let hospital = 0;
let school = 0;
let university = 0;
let medicalSchool = 0;

let gold = 100;

let goldHtml = document.getElementById("goldHtml");
let winState = document.getElementById("winState");

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

    


if (house >= 10 && factory >= 10 && hospital >= 10 && school >= 10 && university >= 10 && medicalSchool >= 10) {
  alert("Congratulations! You have reached the maximum level for all properties.");
  gold += 20;
  goldHtml.innerHTML = "Gold: " + gold;
  maxLevelReached = true;
}

if (house == 10 && !houseAlertShown) {
  alert("Congrats you completed Houses \n you don't need to construct House anymore");
  gold += 20;
  goldHtml.innerHTML = "Gold: " + gold;
  houseAlertShown = true;
}

if (factory == 10 && !factoryAlertShown) {
  alert("Congrats you completed Factories \n you don't need to construct Factory anymore");
  gold += 20;
  goldHtml.innerHTML = "Gold: " + gold;
  factoryAlertShown = true;
}

if (hospital == 10 && !hospitalAlertShown) {
  alert("Congrats you completed Hospitals \n you don't need to construct Hospital anymore");
  gold += 20;
  goldHtml.innerHTML = "Gold: " + gold;
  hospitalAlertShown = true;
}

if (school == 10 && !schoolAlertShown) {
  alert("Congrats you completed Schools \n you don't need to construct School anymore");
  gold += 20;
  goldHtml.innerHTML = "Gold: " + gold;
  schoolAlertShown = true;
}

if (university == 10 && !universityAlertShown) {
  alert("Congrats you completed Universities \n you don't need to construct University anymore");
  gold += 20;
  goldHtml.innerHTML = "Gold: " + gold;
  universityAlertShown = true;
}

if (medicalSchool == 10 && !medicalSchoolAlertShown) {
  alert("Congrats you completed Medical Schools \n you don't need to construct Medical School anymore");
  gold += 20;
  goldHtml.innerHTML = "Gold: " + gold;
  medicalSchoolAlertShown = true;
}
    
}


function goldIncrease() {
    gold += 10;
    goldHtml.innerHTML = "Gold: " + gold;
    
}


setInterval(goldIncrease,10000);

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
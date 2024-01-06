let house = 0;
let factory = 0;
let hospital = 0;
let school = 0;
let university = 0;
let medicalSchool = 0;

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
    } else if (selectedProperty === "factory") {
        factory += 1;
    } else if (selectedProperty === "hospital") {
        hospital += 1;
    } else if (selectedProperty === "school") {
        school += 1;
    } else if (selectedProperty === "university") {
        university += 1;
    } else if (selectedProperty === "medicalSchool") {
        medicalSchool += 1;
    }

    houseChange.innerHTML = "House: " + house;
    factoryChange.innerHTML = "Factory: " + factory;
    hospitalChange.innerHTML = "Hospital: " + hospital;
    schoolChange.innerHTML = "School: " + school;
    universityChange.innerHTML = "University: " + university;
    medicalSchoolChange.innerHTML = "Medical School: " + medicalSchool;
}

let countryName = document.getElementById("countryName").value;


function setLocalStorageCountryProperties() {
    localStorage.setItem('countryName','countryName');
}

function getLocalStorageCountryProperties() {
    localStorage.getItem("countryName");
}                                                   
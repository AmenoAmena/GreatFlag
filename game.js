
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();  
        getFormValue();
    });

    function getFormValue() {
        let countryName = document.getElementById("countryName").value;
        let continent = document.getElementById("continent").value;
        let gold = document.getElementById("gold").value;

        console.log(countryName);
        console.log(gold);
        console.log(continent);

        setLocalStorageCountryProperties(countryName);

        updateParagraph(countryName);
    }

    function setLocalStorageCountryProperties(countryName) {
        localStorage.setItem('countryName', countryName);
    }

  

    getLocalStorageCountryProperties();
});


function getLocalStorageCountryProperties() {
    const storedCountryName = localStorage.getItem("countryName");
    console.log(storedCountryName);
}

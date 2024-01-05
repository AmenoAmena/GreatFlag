document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();  
        getFormValue();
    });

    function getFormValue() {
        let Button = document.getElementById("Form");
        let countryName = document.getElementById("countryName").value;
        let continent = document.getElementById("continent").value;
        let gold = document.getElementById("gold").value;

        // Validate input values
        if (!countryName || !continent || !gold) {
            alert("Please fill in all fields");
            return;
        }
        Button.onclick = function() {
            window.location.href = "game.html";
        };

        console.log(countryName);
        console.log(gold);
        console.log(continent);

        setLocalStorageCountryProperties(countryName);

        updateParagraph(countryName);
    }

    function setLocalStorageCountryProperties(countryName) {
        localStorage.setItem('countryName', countryName);
    }

    function updateParagraph(countryName) {
        let outputParagraph = document.getElementById("outputParagraph");
        outputParagraph.textContent = `Selected Country: ${countryName}`;
    }

    getLocalStorageCountryProperties();
});

function getLocalStorageCountryProperties() {
    const storedCountryName = localStorage.getItem("countryName");
    console.log(storedCountryName);

}

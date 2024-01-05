document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        getFormValue();
    });

    function getFormValue() {
        const countryName = document.getElementById("countryName").value;
        const continent = document.getElementById("continent").value;
        const gold = document.getElementById("gold").value;

        // Validate input values
        if (!countryName || !continent || !gold) {
            alert("Please fill in all fields");
            return;
        }

        document.getElementById("Form").onclick = function() {
            window.location.href = "game.html";
        };

        console.log(countryName);
        console.log(gold);
        console.log(continent);

        setLocalStorageCountryProperties(countryName);
    }

});

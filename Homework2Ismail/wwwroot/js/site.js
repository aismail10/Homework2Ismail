// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    // Example functionality: Toggle the visibility of the forecast table
    document.getElementById("toggleForecast").addEventListener("click", function () {
        var forecastTable = document.querySelector(".table");
        forecastTable.style.display = forecastTable.style.display === "none" ? "" : "none";
    });
});


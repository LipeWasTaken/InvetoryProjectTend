document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login feature will be implemented soon!");
    });

    document.querySelector(".forgot-password").addEventListener("click", function () {
        alert("Forgot Password feature coming soon!");
    });

});


document.getElementById("filter-button").addEventListener("click", function () {
    document.querySelector(".filter-container").classList.toggle("active");
});

// Hide dropdown when clicking outside
document.addEventListener("click", function (event) {
    let filterContainer = document.querySelector(".filter-container");
    if (!filterContainer.contains(event.target)) {
        filterContainer.classList.remove("active");
    }
});

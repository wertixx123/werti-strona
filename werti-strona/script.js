document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("showMessage").addEventListener("click", function() {
        alert("Witaj na mojej stronie!");
    });

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("formMessage").innerText = "Dziękujemy za kontakt!";
        this.reset();
    });
});
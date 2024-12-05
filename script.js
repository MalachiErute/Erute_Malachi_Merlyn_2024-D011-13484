document.querySelector("#contactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        event.preventDefault();
        alert("All fields are required.");
    } else {
        alert("Form submitted successfully!");
    }
});

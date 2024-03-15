// script.js

// JavaScript for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(this);

    // Example: Log form data to console
    console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    });

    // You can perform further actions here, such as sending the form data to a server using fetch API

    // Example: Show response message
    document.getElementById('responseMessage').innerText = "Message sent successfully!";
});

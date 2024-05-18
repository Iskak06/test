// public/scripts.js

// Assign passmails array to the window object
window.passmails = [];

// Function to save input
async function saveInput() {
    // Get email and password inputs
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    // Regular expression to validate email format
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

    // Check if email and password are valid
    if (emailRegex.test(email) && password.length > 0) {
        // Create entry object
        const entry = { mail: email, password };

        // Push entry to passmails array
        window.passmails.push(entry);

        // Update the display of saved entries
        displaySavedEntries();

        // Clear the input fields
        document.getElementById('emailInput').value = '';
        document.getElementById('passwordInput').value = '';

        // Show success message
        document.getElementById('message').textContent = `Input saved: Email - ${email}, Password - ${password}`;
    } else {
        // Show error message for invalid input
        document.getElementById('message').textContent = 'Please enter a valid email and password.';
    }
}

// Function to display saved entries
function displaySavedEntries() {
    // Get the ul element to display saved entries
    const savedOutput = document.getElementById('savedOutput');
    savedOutput.innerHTML = '';

    // Iterate through passmails array and display each entry
    window.passmails.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `Email: ${entry.mail}, Password: ${entry.password}`;
        savedOutput.appendChild(li);
    });
}

// Load saved entries on window load
window.onload = displaySavedEntries;

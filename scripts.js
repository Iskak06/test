function saveInput() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    
    // Retrieve existing data from Local Storage or initialize an empty array
    let passmails = JSON.parse(localStorage.getItem('passmails')) || [];
    
    if (emailRegex.test(email) && password.length > 0) {
        // Create entry object
        const entry = { email, password };
        
        // Push entry to passmails array
        passmails.push(entry);
        
        // Save updated passmails array to Local Storage
        localStorage.setItem('passmails', JSON.stringify(passmails));
        
        // Update the display of saved entries
        displaySavedEntries();
        
        // Clear the input fields
        document.getElementById('emailInput').value = '';
        document.getElementById('passwordInput').value = '';
        
        // Show success message
        document.getElementById('message').textContent = 'Input saved successfully!';
    } else {
        // Show error message for invalid input
        document.getElementById('message').textContent = 'Please enter a valid email and password.';
    }
}

function displaySavedEntries() {
    // Get the ul element to display saved entries
    const savedOutput = document.getElementById('savedOutput');
    savedOutput.innerHTML = '';

    // Retrieve passmails array from Local Storage
    const passmails = JSON.parse(localStorage.getItem('passmails')) || [];

    // Iterate through passmails array and display each entry
    passmails.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `Email: ${entry.email}, Password: ${entry.password}`;
        savedOutput.appendChild(li);
    });
}

// Call displaySavedEntries function once when the page loads
displaySavedEntries();


function resetVariables() {
    // Reset passmails array to an empty array
    localStorage.setItem('passmails', JSON.stringify([]));
    
    // Optionally, you can reset other variables if needed
}

// Call resetVariables when you want to reset the variables
resetVariables();

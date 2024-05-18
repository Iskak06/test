// Function to save input to Local Storage
function saveInput() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;

    if (emailRegex.test(email) && password.length > 0) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        document.getElementById('message').textContent = 'Input saved successfully!';
    } else {
        document.getElementById('message').textContent = 'Please enter a valid email and password.';
    }
}

function saveInput() {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    
    console.log("Email:", email);
    console.log("Password:", password);

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    
    console.log("Data saved to Local Storage");

    document.getElementById('message').textContent = 'Input saved successfully!';
}

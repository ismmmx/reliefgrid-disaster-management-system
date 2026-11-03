// Function to clear login messages and borders
function clearLoginErrors() {
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("roleError").innerHTML = "";
    document.getElementById("loginSuccess").innerHTML = "";

    document.getElementById("email").style.border = "1px solid #ced4da";
    document.getElementById("password").style.border = "1px solid #ced4da";
    document.getElementById("role").style.border = "1px solid #ced4da";
}

// Function activated by onsubmit="return validateLogin()" in login.html
function validateLogin() {
    // Activate helper function to clear previous messages
    clearLoginErrors();

    let emailInput = document.getElementById("email");
    let passwordInput = document.getElementById("password");
    let roleInput = document.getElementById("role");

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    let role = roleInput.value;

    let isValid = true;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check email
    if (email === "") {
        let err = document.getElementById("emailError");
        err.innerHTML = "Email field cannot be empty";
        err.style.color = "red";
        emailInput.style.border = "2px solid red";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        let err = document.getElementById("emailError");
        err.innerHTML = "Enter a valid email address";
        err.style.color = "red";
        emailInput.style.border = "2px solid red";
        isValid = false;
    }

    // Check password (not empty and at least 6 characters)
    if (password === "") {
        let err = document.getElementById("passwordError");
        err.innerHTML = "Password field cannot be empty";
        err.style.color = "red";
        passwordInput.style.border = "2px solid red";
        isValid = false;
    } else if (password.length < 6) {
        let err = document.getElementById("passwordError");
        err.innerHTML = "Password must contain at least 6 characters";
        err.style.color = "red";
        passwordInput.style.border = "2px solid red";
        isValid = false;
    }

    // Check user category selection
    if (role === "") {
        let err = document.getElementById("roleError");
        err.innerHTML = "Please select a user category";
        err.style.color = "red";
        roleInput.style.border = "2px solid red";
        isValid = false;
    }

    // Stop form submission if any error exists (Week 06 Slide 24-25)
    if (isValid === false) {
        return false;
    }

    // Show success message using innerHTML
    let successMsg = document.getElementById("loginSuccess");
    successMsg.innerHTML = "Login Successful!";
    successMsg.style.color = "green";
    console.log("Login verified for: " + email);
    return true;
}
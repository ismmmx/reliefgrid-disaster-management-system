// Function to clear all error messages and reset borders
function clearAdminErrors() {
    let errorIds = [
        "nameError", "emailError", "phoneError", "dobError",
        "passwordError", "confirmPasswordError", "regionError",
        "secretKeyError", "fileError", "addressError", "regSuccess"
    ];

    for (let i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).innerHTML = "";
    }

    let inputIds = [
        "fullname", "email", "phone", "dob", "password",
        "confirm_password", "region", "secret_key", "id_proof", "address"
    ];

    for (let j = 0; j < inputIds.length; j++) {
        document.getElementById(inputIds[j]).style.border = "1px solid #ced4da";
    }
}

// Function activated by onchange="checkFile()" on file input
function checkFile() {
    let fileMsg = document.getElementById("fileError");
    fileMsg.innerHTML = "";
    document.getElementById("id_proof").style.border = "1px solid #ced4da";
}

// Main validation function activated by onsubmit="return validateAdminForm()"
function validateAdminForm() {
    // Activate clear function first
    clearAdminErrors();

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let region = document.getElementById("region").value.trim();
    let secretKey = document.getElementById("secret_key").value.trim();
    let idProof = document.getElementById("id_proof").value;
    let address = document.getElementById("address").value.trim();

    let isValid = true;

    // Regular expressions (JS Task 3 Requirement 6)
    let namePattern = /^[A-Za-z\s.]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^01[0-9]{9}$/;
    let numberPattern = /[0-9]/;
    let regionPattern = /^[A-Za-z\s,]+$/;

    // 1. Name validation
    if (fullname === "") {
        let err = document.getElementById("nameError");
        err.innerHTML = "Name cannot be empty";
        err.style.color = "red";
        document.getElementById("fullname").style.border = "2px solid red";
        isValid = false;
    } else if (!namePattern.test(fullname)) {
        let err = document.getElementById("nameError");
        err.innerHTML = "Name should contain only letters";
        err.style.color = "red";
        document.getElementById("fullname").style.border = "2px solid red";
        isValid = false;
    }

    // 2. Email validation
    if (email === "") {
        let err = document.getElementById("emailError");
        err.innerHTML = "Email cannot be empty";
        err.style.color = "red";
        document.getElementById("email").style.border = "2px solid red";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        let err = document.getElementById("emailError");
        err.innerHTML = "Enter a valid email address";
        err.style.color = "red";
        document.getElementById("email").style.border = "2px solid red";
        isValid = false;
    }

    // 3. Phone number validation
    if (phone === "") {
        let err = document.getElementById("phoneError");
        err.innerHTML = "Phone number cannot be empty";
        err.style.color = "red";
        document.getElementById("phone").style.border = "2px solid red";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        let err = document.getElementById("phoneError");
        err.innerHTML = "Enter a valid 11-digit number (01XXXXXXXXX)";
        err.style.color = "red";
        document.getElementById("phone").style.border = "2px solid red";
        isValid = false;
    }

    // 4. Password validation
    if (password === "") {
        let err = document.getElementById("passwordError");
        err.innerHTML = "Password cannot be empty";
        err.style.color = "red";
        document.getElementById("password").style.border = "2px solid red";
        isValid = false;
    } else if (password.length < 6 || !numberPattern.test(password)) {
        let err = document.getElementById("passwordError");
        err.innerHTML = "Password is too weak";
        err.style.color = "red";
        document.getElementById("password").style.border = "2px solid red";
        isValid = false;
    }

    // 5. Confirm password validation
    if (confirmPassword === "") {
        let err = document.getElementById("confirmPasswordError");
        err.innerHTML = "Please confirm your password";
        err.style.color = "red";
        document.getElementById("confirm_password").style.border = "2px solid red";
        isValid = false;
    } else if (password !== confirmPassword) {
        let err = document.getElementById("confirmPasswordError");
        err.innerHTML = "Passwords do not match";
        err.style.color = "red";
        document.getElementById("confirm_password").style.border = "2px solid red";
        isValid = false;
    }

    // 6. Unique Rule 1: Date of Birth (minimum 18 years old)
    if (dob === "") {
        let err = document.getElementById("dobError");
        err.innerHTML = "Date of birth is required";
        err.style.color = "red";
        document.getElementById("dob").style.border = "2px solid red";
        isValid = false;
    } else {
        let birthYear = new Date(dob).getFullYear();
        let currentYear = new Date().getFullYear();
        if (currentYear - birthYear < 18) {
            let err = document.getElementById("dobError");
            err.innerHTML = "Admin must be at least 18 years old";
            err.style.color = "red";
            document.getElementById("dob").style.border = "2px solid red";
            isValid = false;
        }
    }

    // 7. Unique Rule 2: Assigned Region (letters only, min 3 chars)
    if (region === "" || region.length < 3 || !regionPattern.test(region)) {
        let err = document.getElementById("regionError");
        err.innerHTML = "Enter a valid region name (letters only)";
        err.style.color = "red";
        document.getElementById("region").style.border = "2px solid red";
        isValid = false;
    }

    // 8. Unique Rule 3: Secret Key (must start with ADMIN)
    if (secretKey === "" || !secretKey.startsWith("ADMIN") || secretKey.length < 6) {
        let err = document.getElementById("secretKeyError");
        err.innerHTML = "Token must start with ADMIN (e.g. ADMIN123)";
        err.style.color = "red";
        document.getElementById("secret_key").style.border = "2px solid red";
        isValid = false;
    }

    // 9. Unique Rule 4: Identity Proof File (must be PDF, JPG, or PNG)
    if (idProof === "") {
        let err = document.getElementById("fileError");
        err.innerHTML = "Please upload your identity document";
        err.style.color = "red";
        document.getElementById("id_proof").style.border = "2px solid red";
        isValid = false;
    } else {
        let fileLower = idProof.toLowerCase();
        if (!fileLower.endsWith(".pdf") && !fileLower.endsWith(".jpg") && !fileLower.endsWith(".png")) {
            let err = document.getElementById("fileError");
            err.innerHTML = "Only PDF, JPG, or PNG files are allowed";
            err.style.color = "red";
            document.getElementById("id_proof").style.border = "2px solid red";
            isValid = false;
        }
    }

    // 10. Unique Rule 5: Office Address (minimum 10 characters)
    if (address === "" || address.length < 10) {
        let err = document.getElementById("addressError");
        err.innerHTML = "Office address must be at least 10 characters";
        err.style.color = "red";
        document.getElementById("address").style.border = "2px solid red";
        isValid = false;
    }

    // Prevent submission if any validation failed
    if (isValid === false) {
        return false;
    }

    // Display success message using innerHTML
    let successBox = document.getElementById("regSuccess");
    successBox.innerHTML = "Registration Successful!";
    successBox.style.color = "green";
    console.log("Registered Admin: " + fullname);
    return true;
}
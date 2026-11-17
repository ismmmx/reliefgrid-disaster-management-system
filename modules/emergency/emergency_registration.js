
function clearEmergencyErrors() {
    let errorIds = [
        "nameError",
        "phoneError",
        "emailError",
        "passwordError",
        "confirmPasswordError",
        "locationError",
        "familyError",
        "urgencyError",
        "statusError",
        "aidError",
        "regSuccess"
    ];

    for (let i = 0; i < errorIds.length; i++) {
        let errElement = document.getElementById(errorIds[i]);
        if (errElement) {
            errElement.innerHTML = "";
        }
    }

    // Reset input borders
    let inputIds = [
        "fullname",
        "phone",
        "email",
        "password",
        "confirm_password",
        "location",
        "familysize",
        "urgency"
    ];

    for (let j = 0; j < inputIds.length; j++) {
        let inputElement = document.getElementById(inputIds[j]);
        if (inputElement) {
            inputElement.style.border = "1px solid #ced4da";
        }
    }
}

// Master Validation Function activated by onsubmit="return validateEmergencyForm()"
function validateEmergencyForm() {
    // 1. Reset previous errors first
    clearEmergencyErrors();

    // 2. Retrieve form values into variables 
    let fullname = document.getElementById("fullname").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let location = document.getElementById("location").value.trim();
    let familysize = document.getElementById("familysize").value.trim();
    let urgency = document.getElementById("urgency").value;

    let isValid = true;

    // 3. Regular Expressions 
    let namePattern = /^[A-Za-z\s.]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^01[0-9]{9}$/;
    let numberPattern = /[0-9]/;
    let locationPattern = /^[A-Za-z0-9\s,.-]+$/;

    // --- STANDARD VALIDATION RULES ---

    // Rule A: Full Name Validation
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

    // Rule B: Phone Number Validation (11-digit Bangladeshi format)
    if (phone === "") {
        let err = document.getElementById("phoneError");
        err.innerHTML = "Phone number cannot be empty";
        err.style.color = "red";
        document.getElementById("phone").style.border = "2px solid red";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        let err = document.getElementById("phoneError");
        err.innerHTML = "Enter a valid 11-digit phone number (01XXXXXXXXX)";
        err.style.color = "red";
        document.getElementById("phone").style.border = "2px solid red";
        isValid = false;
    }

    // Rule C: Email Validation
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

    // Rule D: Password Validation (min 6 characters, at least 1 number)
    if (password === "") {
        let err = document.getElementById("passwordError");
        err.innerHTML = "Password cannot be empty";
        err.style.color = "red";
        document.getElementById("password").style.border = "2px solid red";
        isValid = false;
    } else if (password.length < 6 || !numberPattern.test(password)) {
        let err = document.getElementById("passwordError");
        err.innerHTML = "Password is too weak (min 6 chars with at least 1 number)";
        err.style.color = "red";
        document.getElementById("password").style.border = "2px solid red";
        isValid = false;
    }

    // Rule E: Confirm Password Validation (Match check)
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

    // --- 5 UNIQUE VALIDATION RULES (Lab Task 03 Section 3) ---

    // Unique Rule 1: Flood Location / Affected Area (min 5 characters)
    if (location === "") {
        let err = document.getElementById("locationError");
        err.innerHTML = "Current location/area cannot be empty";
        err.style.color = "red";
        document.getElementById("location").style.border = "2px solid red";
        isValid = false;
    } else if (location.length < 5 || !locationPattern.test(location)) {
        let err = document.getElementById("locationError");
        err.innerHTML = "Enter a specific location (min 5 chars, letters & numbers)";
        err.style.color = "red";
        document.getElementById("location").style.border = "2px solid red";
        isValid = false;
    }

    // Unique Rule 2: Family Size (integer between 1 and 30)
    let parsedFamily = parseInt(familysize, 10);
    if (familysize === "") {
        let err = document.getElementById("familyError");
        err.innerHTML = "Family size is required";
        err.style.color = "red";
        document.getElementById("familysize").style.border = "2px solid red";
        isValid = false;
    } else if (isNaN(parsedFamily) || parsedFamily < 1 || parsedFamily > 30) {
        let err = document.getElementById("familyError");
        err.innerHTML = "Enter a valid family size between 1 and 30";
        err.style.color = "red";
        document.getElementById("familysize").style.border = "2px solid red";
        isValid = false;
    }

    // Unique Rule 3: Immediate Emergency Aid Checkboxes (At least 1 selected)
    let aidCheckboxes = document.getElementsByName("emergency_aid");
    let isAidSelected = false;
    for (let k = 0; k < aidCheckboxes.length; k++) {
        if (aidCheckboxes[k].checked) {
            isAidSelected = true;
            break;
        }
    }
    if (!isAidSelected) {
        let err = document.getElementById("aidError");
        err.innerHTML = "Select at least one emergency assistance type";
        err.style.color = "red";
        isValid = false;
    }

    // Unique Rule 4: Current Shelter Status Radio (Must select one option)
    let shelterRadios = document.getElementsByName("shelter_status");
    let isStatusSelected = false;
    for (let m = 0; m < shelterRadios.length; m++) {
        if (shelterRadios[m].checked) {
            isStatusSelected = true;
            break;
        }
    }
    if (!isStatusSelected) {
        let err = document.getElementById("statusError");
        err.innerHTML = "Please select your current shelter/safety status";
        err.style.color = "red";
        isValid = false;
    }

    // Unique Rule 5: Urgency / Severity Level Dropdown
    if (urgency === "") {
        let err = document.getElementById("urgencyError");
        err.innerHTML = "Please select an emergency urgency level";
        err.style.color = "red";
        document.getElementById("urgency").style.border = "2px solid red";
        isValid = false;
    }

    // 4. Form Submission Control (Lab Task 03 Requirement 4)
    if (isValid === false) {
        return false;
    }

    // 5. Success Message Display using innerHTML only
    let successBox = document.getElementById("regSuccess");
    successBox.innerHTML = "Registration Successful! Emergency rescue request logged.";
    successBox.style.color = "green";
    console.log("Emergency Request Registered for: " + fullname + " at " + location);

    return true;
}

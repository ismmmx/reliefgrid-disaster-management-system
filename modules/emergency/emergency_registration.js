function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const phone = document.getElementById('phone').value;
    const checkboxes = document.querySelectorAll('input[name="assistance[]"]:checked');

    // Password Match Validation
    if (password !== confirmPassword) {
        alert("Error: Password and Confirm Password do not match!");
        return false;
    }

    // Basic Phone Number Check
    if (phone.length < 11) {
        alert("Error: Please enter a valid phone number (at least 11 digits).");
        return false;
    }

    // Ensure at least one type of emergency relief is selected
    if (checkboxes.length === 0) {
        alert("Error: Please select at least one type of Urgent Relief Required.");
        return false;
    }

    alert("Emergency Request Submitted Successfully!");
    return true;
}
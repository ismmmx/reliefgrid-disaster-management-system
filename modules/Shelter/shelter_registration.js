
function nameerrorfunc() {
    let fullname = document.getElementById("fullname").value;

    if (fullname === "") {
        document.getElementById("nameerror").innerHTML = "Name cannot be empty";
        document.getElementById("nameerror").style.color = "red";
        return false;
    } else {
        document.getElementById("nameerror").innerHTML = "";
        return true;
    }
}

function emailerrorfunc() {
    let email = document.getElementById("email").value;

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailerror").innerHTML = "Enter a valid email address";
        document.getElementById("emailerror").style.color = "red";
        return false;
    } else {
        document.getElementById("emailerror").innerHTML = "";
        return true;
    }
}

function phonefunc() {
    let phone = document.getElementById("phone").value;

    if (phone === "" || phone.length !== 11) {
        document.getElementById("phoneerror").innerHTML = "Enter valid phone number (11 digits)";
        document.getElementById("phoneerror").style.color = "red";
        return false;
    } else {
        document.getElementById("phoneerror").innerHTML = "";
        return true;
    }
}

function passcheckfunc() {
    let password = document.getElementById("password").value;

    if (password === "" || password.length < 8) {
        document.getElementById("passerror").innerHTML = "Password required (min 8 chars)";
        document.getElementById("passerror").style.color = "red";
        return false;
    } else {
        document.getElementById("passerror").innerHTML = "";
        return true;
    }
}

function shelternamefunc() {
    let sheltername = document.getElementById("shelter_name").value;

    if (sheltername === "") {
        document.getElementById("shelternameerror").innerHTML = "Shelter name required";
        document.getElementById("shelternameerror").style.color = "red";
        return false;
    } else {
        document.getElementById("shelternameerror").innerHTML = "";
        return true;
    }
}

function capacityfunc() {
    let capacity = document.getElementById("capacity").value;

    if (capacity === "" || capacity < 10 || capacity > 10000) {
        document.getElementById("capacityerror").innerHTML = "Capacity must be between 10 and 10000";
        document.getElementById("capacityerror").style.color = "red";
        return false;
    } else {
        document.getElementById("capacityerror").innerHTML = "";
        return true;
    }
}

function addressfunc() {
    let address = document.getElementById("shelter_address").value;

    if (address === "") {
        document.getElementById("addresserror").innerHTML = "Shelter address required";
        document.getElementById("addresserror").style.color = "red";
        return false;
    } else {
        document.getElementById("addresserror").innerHTML = "";
        return true;
    }
}

function typefunc() {
    let type = document.getElementById("shelter_type").value;

    if (type === "") {
        document.getElementById("typeerror").innerHTML = "Select shelter type";
        document.getElementById("typeerror").style.color = "red";
        return false;
    } else {
        document.getElementById("typeerror").innerHTML = "";
        return true;
    }
}

function validation() {

    let isNameValid = nameerrorfunc();
    let isEmailValid = emailerrorfunc();
    let isPhoneValid = phonefunc();
    let isPassValid = passcheckfunc();
    let isShelterNameValid = shelternamefunc();
    let isCapacityValid = capacityfunc();
    let isAddressValid = addressfunc();
    let isTypeValid = typefunc();

    if (isNameValid === false ||
        isEmailValid === false ||
        isPhoneValid === false ||
        isPassValid === false ||
        isShelterNameValid === false ||
        isCapacityValid === false ||
        isAddressValid === false ||
        isTypeValid === false) {

        return false;

    } else {
        return true;
    }
}

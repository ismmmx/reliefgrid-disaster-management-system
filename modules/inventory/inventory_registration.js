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

function passcheckfunc() {
    let password = document.getElementById("password").value;
    if (password === "" || password.length < 6) {
        document.getElementById("passerror").innerHTML = "Password required (min 6 chars)";
        document.getElementById("passerror").style.color = "red";
        return false;
    } else {
        document.getElementById("passerror").innerHTML = "";
        return true;
    }
}

function confirmpassfunc() {
    let password = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirm_password").value;
    if (confirmPass === "" || confirmPass !== password) {
        document.getElementById("confirmpasserror").innerHTML = "Passwords do not match";
        document.getElementById("confirmpasserror").style.color = "red";
        return false;
    } else {
        document.getElementById("confirmpasserror").innerHTML = "";
        return true;
    }
}

function phonefunc() {
    let phone = document.getElementById("phone").value;
    if (phone === "" || phone.length !== 11) {
        document.getElementById("phoneerror").innerHTML = "Enter valid phone number";
        document.getElementById("phoneerror").style.color = "red";
        return false;
    } else {
        document.getElementById("phoneerror").innerHTML = "";
        return true;
    }
}

function nidfunc() {
    let nid = document.getElementById("nid").value;
    if (nid === "" || nid.length !== 10) {
        document.getElementById("niderror").innerHTML = "Valid NID number required";
        document.getElementById("niderror").style.color = "red";
        return false;
    } else {
        document.getElementById("niderror").innerHTML = "";
        return true;
    }
}

function empidfunc() {
    let empid = document.getElementById("empid").value;
    if (empid === "") {
        document.getElementById("empiderror").innerHTML = "Employee ID required";
        document.getElementById("empiderror").style.color = "red";
        return false;
    } else {
        document.getElementById("empiderror").innerHTML = "";
        return true;
    }
}

function warehousefunc() {
    let warehouse = document.getElementById("warehouse").value;
    if (warehouse === "") {
        document.getElementById("warehouseerror").innerHTML = "Assigned warehouse required";
        document.getElementById("warehouseerror").style.color = "red";
        return false;
    } else {
        document.getElementById("warehouseerror").innerHTML = "";
        return true;
    }
}

function regionfunc() {
    let region = document.getElementById("region").value;
    if (region === "") {
        document.getElementById("regionerror").innerHTML = "Assigned district required";
        document.getElementById("regionerror").style.color = "red";
        return false;
    } else {
        document.getElementById("regionerror").innerHTML = "";
        return true;
    }
}

function dobfunc() {
    let dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("doberror").innerHTML = "Date of birth required";
        document.getElementById("doberror").style.color = "red";
        return false;
    } else {
        document.getElementById("doberror").innerHTML = "";
        return true;
    }
}

function genderfunc() {
    let gender = document.getElementById("gender").value;
    if (gender === "") {
        document.getElementById("gendererror").innerHTML = "Select gender";
        document.getElementById("gendererror").style.color = "red";
        return false;
    } else {
        document.getElementById("gendererror").innerHTML = "";
        return true;
    }
}

function religionfunc() {
    let religion = document.getElementById("religion").value;
    if (religion === "") {
        document.getElementById("religionerror").innerHTML = "Select religion";
        document.getElementById("religionerror").style.color = "red";
        return false;
    } else {
        document.getElementById("religionerror").innerHTML = "";
        return true;
    }
}

function bloodfunc() {
    let blood = document.getElementById("blood_group").value;
    if (blood === "") {
        document.getElementById("blooderror").innerHTML = "Select blood group";
        document.getElementById("blooderror").style.color = "red";
        return false;
    } else {
        document.getElementById("blooderror").innerHTML = "";
        return true;
    }
}

function validation() {
    let isNameValid = nameerrorfunc();
    let isEmailValid = emailerrorfunc();
    let isPassValid = passcheckfunc();
    let isConfirmPassValid = confirmpassfunc();
    let isPhoneValid = phonefunc();
    let isNidValid = nidfunc();
    let isEmpValid = empidfunc();
    let isWarehouseValid = warehousefunc();
    let isRegionValid = regionfunc();
    let isDobValid = dobfunc();
    let isGenderValid = genderfunc();
    let isReligionValid = religionfunc();
    let isBloodValid = bloodfunc();

    if (isNameValid === false || isEmailValid === false || isPassValid === false || 
        isConfirmPassValid === false || isPhoneValid === false || isNidValid === false || 
        isEmpValid === false || isWarehouseValid === false || isRegionValid === false || 
        isDobValid === false || isGenderValid === false || isReligionValid === false || 
        isBloodValid === false) {
        return false;
    } else {
        return true;
    }
}
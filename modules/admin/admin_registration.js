function fullnamefunc() {
  let fullname = document.getElementById("fullname").value;
  if (fullname === "") {
    document.getElementById("nameError").innerHTML = "Name cannot be empty";
    document.getElementById("nameError").style.color = "#ff6b6b";
    return false;
  } else {
    document.getElementById("nameError").innerHTML = "";
    return true;
  }
}

function emailfunc() {
  let email = document.getElementById("email").value;
  if (email === "" || !email.includes("@")) {
    document.getElementById("emailError").innerHTML =
      "Enter a valid email address with @";
    document.getElementById("emailError").style.color = "#ff6b6b";
    return false;
  } else {
    document.getElementById("emailError").innerHTML = "";
    return true;
  }
}

function phonefunc() {
  let phone = document.getElementById("phone").value;
  if (phone === "" || phone.length !== 11) {
    document.getElementById("phoneError").innerHTML =
      "Enter valid 11-digit phone number";
    document.getElementById("phoneError").style.color = "#ff6b6b";
    return false;
  } else {
    document.getElementById("phoneError").innerHTML = "";
    return true;
  }
}

function dobfunc() {
  let dob = document.getElementById("dob").value;
  if (dob === "") {
    document.getElementById("dobError").innerHTML = "Date of birth is required";
    document.getElementById("dobError").style.color = "#ff6b6b";
    return false;
  } else {
    let birthYear = new Date(dob).getFullYear();
    let currentYear = new Date().getFullYear();

    if (currentYear - birthYear < 18) {
      document.getElementById("dobError").innerHTML =
        "Admin must be at least 18 years old";
      document.getElementById("dobError").style.color = "#ff6b6b";
      return false;
    } else {
      document.getElementById("dobError").innerHTML = "";
      return true;
    }
  }
}

function passcheckfunc() {
  let password = document.getElementById("password").value;
  if (password === "" || password.length < 6) {
    document.getElementById("passwordError").innerHTML =
      "Password required (min 6 chars)";
    document.getElementById("passwordError").style.color = "#ff6b6b";
    return false;
  } else {
    document.getElementById("passwordError").innerHTML = "";
    return true;
  }
}

function confirmpassfunc() {
  let password = document.getElementById("password").value;
  let confirmPass = document.getElementById("confirm_password").value;
  if (confirmPass === "" || confirmPass !== password) {
    document.getElementById("confirmPasswordError").innerHTML =
      "Passwords do not match";
    document.getElementById("confirmPasswordError").style.color = "#ff6b6b";
    return false;
  } else {
    document.getElementById("confirmPasswordError").innerHTML = "";
    return true;
  }
}

function regionfunc() {
  let region = document.getElementById("region").value;
  if (region === "" || region.length < 3) {
    document.getElementById("regionError").innerHTML =
      "Region is required (min 3 chars)";
    document.getElementById("regionError").style.color = "#ff6b6b";
    return false;
  } else {
    document.getElementById("regionError").innerHTML = "";
    return true;
  }
}

function secretkeyfunc() {
  let secretKey = document.getElementById("secret_key").value;
  if (secretKey === "" || !secretKey.startsWith("ADMIN")) {
    document.getElementById("secretKeyError").innerHTML =
      "Token must start with ADMIN";
    document.getElementById("secretKeyError").style.color = "#ff6b6b";
    return false;
  } else {
    document.getElementById("secretKeyError").innerHTML = "";
    return true;
  }
}

function idprooffunc() {
  let idProof = document.getElementById("id_proof").value;
  if (idProof === "") {
    document.getElementById("fileError").innerHTML =
      "Please upload an identity document";
    document.getElementById("fileError").style.color = "#ff6b6b";
    return false;
  } else {
    document.getElementById("fileError").innerHTML = "";
    return true;
  }
}

function addressfunc() {
  let address = document.getElementById("address").value;
  if (address === "" || address.length < 10) {
    document.getElementById("addressError").innerHTML =
      "Address required (min 10 chars)";
    document.getElementById("addressError").style.color = "#ff6b6b";
    return false;
  } else {
    document.getElementById("addressError").innerHTML = "";
    return true;
  }
}

function validation() {
  let isNameValid = fullnamefunc();
  let isEmailValid = emailfunc();
  let isPhoneValid = phonefunc();
  let isDobValid = dobfunc();
  let isPassValid = passcheckfunc();
  let isConfirmPassValid = confirmpassfunc();
  let isRegionValid = regionfunc();
  let isSecretKeyValid = secretkeyfunc();
  let isIdProofValid = idprooffunc();
  let isAddressValid = addressfunc();

  if (
    isNameValid === false ||
    isEmailValid === false ||
    isPhoneValid === false ||
    isDobValid === false ||
    isPassValid === false ||
    isConfirmPassValid === false ||
    isRegionValid === false ||
    isSecretKeyValid === false ||
    isIdProofValid === false ||
    isAddressValid === false
  ) {
    return false;
  } else {
    document.getElementById("regSuccess").innerHTML =
      "Admin Registration Successful!";
    document.getElementById("regSuccess").style.color = "#4ade80";
    return true;
  }
}

function clearAdminErrors() {
  document.getElementById("regSuccess").innerHTML = "";
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("dobError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";
  document.getElementById("confirmPasswordError").innerHTML = "";
  document.getElementById("regionError").innerHTML = "";
  document.getElementById("secretKeyError").innerHTML = "";
  document.getElementById("fileError").innerHTML = "";
  document.getElementById("addressError").innerHTML = "";
}

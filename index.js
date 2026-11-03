// Array of system modules (Lecture 05 Slide 9 & 13)
let modules = ["System Admin", "Shelter Manager", "Inventory Handler", "Emergency Victim"];

// Function to display module names on home page
function loadModules() {
    let listElement = document.getElementById("moduleList");
    listElement.innerHTML = modules.join(" | ");
    listElement.style.color = "#0d6efd";
}

// Function called by onclick and onchange in index.html
function showRoleDetails() {
    let selectedRole = document.getElementById("roleSelect").value;
    let msgBox = document.getElementById("roleInfoMessage");

    if (selectedRole === "") {
        msgBox.innerHTML = "Please select a department category first.";
        msgBox.style.color = "red";
    } else if (selectedRole === "admin") {
        msgBox.innerHTML = "Admin Role: Manage users, verify regions, and control the system.";
        msgBox.style.color = "green";
    } else if (selectedRole === "shelter") {
        msgBox.innerHTML = "Shelter Role: Track shelter capacity and assign volunteers.";
        msgBox.style.color = "green";
    } else if (selectedRole === "inventory") {
        msgBox.innerHTML = "Inventory Role: Manage relief stock and distribute supplies.";
        msgBox.style.color = "green";
    } else if (selectedRole === "emergency") {
        msgBox.innerHTML = "Emergency Role: Submit urgent rescue and relief requests.";
        msgBox.style.color = "green";
    }

    console.log("Selected role: " + selectedRole);
}

// Direct function activation when page loads
loadModules();
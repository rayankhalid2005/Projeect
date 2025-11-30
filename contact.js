// function validateForm() {

//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let phone = document.getElementById("phone").value.trim();
//     let OG = document.getElementById("OG").value.trim();
//     let budget = document.getElementById("budget").value.trim();
//     let success = document.getElementById("success");

//     let nameError = document.getElementById("nameError");
//     let emailError = document.getElementById("emailError");
//     let OGError = document.getElementById("OGError");
//     let budgetError = document.getElementById("budgetError");
//     let phoneError= document.getElementById("phoneError");

//     nameError.innerHTML = "";
//     emailError.innerHTML = "";
//     OGError.innerHTML = "";
//     phoneError.innerHTML = "";
//     budgetError.innerHTML="";
//     success.innerHTML = "";

//     let isValid = true;

//     // Name
//     if (name === "") {
//         nameError.innerHTML = "Please enter your name";
//         isValid = false;
//     }

//     // Email
//     if (email === "") {
//         emailError.innerHTML = "Please enter your email";
//         isValid = false;
//     }

//     // Message
//     if (phone === "") {
//     phoneError.innerHTML = "Please enter your phone";
//         isValid = false;
//     }
//     if (OG === "") {
//         messageError.innerHTML = "Please enter company name";
//         isValid = false;
//     }
//     if (budget === "Select budget") {
//         messageError.innerHTML = "Please enter your budget";
//         isValid = false;
//     }

//     // If all fields are filled → show success message
//     if (isValid) {
//         success.innerHTML = "Form is submitted";
//         return false; // prevent page reload
//     }

//     return false; // stop form if errors exist
// }
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("mail").value.trim(); 
    let phone = document.getElementById("phone").value.trim();
    let OG = document.getElementById("OG").value.trim();
    let budget = document.getElementById("budget").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let OGError = document.getElementById("OGError");
    let budgetError = document.getElementById("budgetError");
    let success = document.getElementById("success");

    // Clear error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    OGError.innerHTML = "";
    budgetError.innerHTML = "";
    success.innerHTML = "";

    let isValid = true;

    // Name
    if (name === "") {
        nameError.innerHTML = "Please enter your name";
        isValid = false;
    }

    // Email
    if (email === "") {
        emailError.innerHTML = "Please enter your email";
        isValid = false;
    }

    // Phone
    if (phone === "") {
        phoneError.innerHTML = "Please enter your phone number";
        isValid = false;
    }

    // Organization
    if (OG === "") {
        OGError.innerHTML = "Please enter your company name";
        isValid = false;
    }

    // Budget
    if (budget === "Select budget") {
        budgetError.innerHTML = "Please select your budget";
        isValid = false;
    }

    if (isValid) {
        success.innerHTML = "Form is submitted successfully!";
    }

    return false;
}


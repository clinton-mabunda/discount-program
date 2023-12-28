function checkEligibility() {
    // Retrieve values from the form
    var age = document.getElementById('age').value;
    var isMember = document.getElementById('membership').checked;

    // Check eligibility based on criteria
    if (age >= 65) {
        displayResult("Congratulations! You are eligible for a Senior Discount.");
    } else if (age >= 18 && isMember) {
        displayResult("Congratulations! You are eligible for a Member Discount.");
    } else {
        displayResult("Sorry, you are not eligible for any discount.");
    }
}

function displayResult(message) {
    document.getElementById('result').innerText = message;
}
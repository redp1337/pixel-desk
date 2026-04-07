document.addEventListener("DOMContentLoaded", () => {
    const passInput = document.getElementById("pass-input");
    const errorBox = document.getElementById("error-box");

    // 🔒 Define your password here (obscured slightly) 
    const correctPassword= "36";//
    

function showError(message) {
    const errorBox = document.getElementById("error-box");
    
    // Set the error message
    errorBox.textContent = message;
    errorBox.style.display = "block"; // Show the error box 
    
    // hide the error box after 3 seconds
    setTimeout(() => {
        errorBox.style.display = "none"; // Hide the error box after 3 seconds
    }, 3000);
}
    
    // Add shake animation
    errorBox.classList.add("shake");
    passInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (passInput.value === correctPassword) {
                errorBox.style.display = "none";
                alert("Password correct!");
            } else {
                errorBox.style.display = "block";
                errorBox.classList.add("shake");
                setTimeout(() => errorBox.classList.remove("shake"), 400);
                passInput.classList.add("shake");
                setTimeout(() => passInput.classList.remove("shake"), 400);
            }
        }
    });
});
// need to add some fun animations and maybe a hint system for the password!
// Also, consider adding a "Forgot Password?" link that gives a playful hint about the password, like "It's a sweet fruit!"
//Add 3 second timer for the error box to disappear after showing the error message.
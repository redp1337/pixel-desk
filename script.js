const correctPass= "36"; // Set your password here
function enterPass() {
    const userPassEntry= document.getElementById('pass').value;
    if (correctPass === userPassEntry) { 
        window.location.href='desktop.html'; // Redirect to desktop.html if password is correct 
    } else {
        document.getElementById('error').style.display = "flex"; // Show the error box 
       }
}

function closeError() {
    document.getElementById('error-box').style.display = "none"; // Hide the error box when close button is clicked 
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


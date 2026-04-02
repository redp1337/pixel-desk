document.addEventListener("DOMContentLoaded", () => {
    const passInput = document.getElementById("pass-input");
    const errorBox = document.getElementById("error-box");

    // 🔒 Define your password here (obscured slightly)
    const correctPassword = atob("bWFuZ28xMjM="); // "mango123" encoded in Base64

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
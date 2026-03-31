console.log("Hi there! This is a hint for the puzzle. The king of all fruits is a mango. Can you find it?"); 
// JavaScript Form Validation Script
     // Form Validation Script
     
         function validateForm() {
             const inputPass = document.getElementById('pass').value;
             const correctPass= "mango123";

             if (inputPass === correctPass) {
                 alert("Congratulations! You've entered the correct password and solved the puzzle!");
             } else {
                 const errorBox = document.getElementById('error-box');
                 errorBox.style.display = 'block';
                 setTimeout(() => {
                     errorBox.style.display = 'none';
                 }, 3000);
             }
         }
         validateForm();

            // add enter key event listener
            document.getElementById('pass').addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    validateForm();
                }   

                // add save button event listener
                document.getElementById('save-btn').addEventListener('click', function() {
                    validateForm();
                });
            });
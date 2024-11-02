// LOGIN 


<script>
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    togglePassword.addEventListener("click", function () {
        // Toggle the type attribute
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);

        // Toggle the eye icon
        eyeIcon.classList.toggle("fa-eye-slash");
    });
</script>


<script>
    // Select the input field
    const inputField = document.querySelector('input.form-control');

    // Add event listener for when the user clicks out (blur event)
    inputField.addEventListener('blur', function() {
        // Change border color to light green on blur
        inputField.style.border = "1px solid rgb(16, 213, 16)";
        
        // Add the shake class to trigger animation
        inputField.classList.add('shake');
        
        // Remove the shake class after animation (assuming 500ms duration)
        setTimeout(function() {
            inputField.classList.remove('shake');
        }, 500);
    });

</script>


    // Select the password input container div
    const passwordContainer = document.querySelector('#password-container');

    // Add event listener for when the input loses focus (blur event)
    const passwordInput = document.querySelector('#password');

    // When the input loses focus, apply the effects to the div container
    passwordInput.addEventListener('blur', function() {
        // Change border color of the entire container div to light green
        passwordContainer.classList.add('blur');

        // Add the shake effect to the entire container div
        passwordContainer.classList.add('shake');
        
        // Remove the shake effect after the animation completes (500ms)
        setTimeout(function() {
            passwordContainer.classList.remove('shake');
        }, 500);
    });












    // SIGN UP 

    <script>
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    togglePassword.addEventListener("click", function () {
        // Toggle the type attribute
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);

        // Toggle the eye icon
        eyeIcon.classList.toggle("fa-eye-slash");
    });
</script>


<script>
    // Select the input field
    const inputField = document.querySelector('input.form-control');

    // Add event listener for when the user clicks out (blur event)
    inputField.addEventListener('blur', function() {
        // Change border color to light green on blur
        inputField.style.border = "1px solid rgb(16, 213, 16)";
        
        // Add the shake class to trigger animation
        inputField.classList.add('shake');
        
        // Remove the shake class after animation (assuming 500ms duration)
        setTimeout(function() {
            inputField.classList.remove('shake');
        }, 500);
    });

</script>


<script>
    // Select the password input container div
    const passwordContainer = document.querySelector('#password-container');

    // Add event listener for when the input loses focus (blur event)
    const passwordInput = document.querySelector('#password');

    // When the input loses focus, apply the effects to the div container
    passwordInput.addEventListener('blur', function() {
        // Change border color of the entire container div to light green
        passwordContainer.classList.add('blur');

        // Add the shake effect to the entire container div
        passwordContainer.classList.add('shake');
        
        // Remove the shake effect after the animation completes (500ms)
        setTimeout(function() {
            passwordContainer.classList.remove('shake');
        }, 500);
    });

</script>



<script>
    // Add shake effect to all inputs on form validation
    document.querySelectorAll('input.form-control').forEach(input => {
        input.addEventListener('blur', function() {
            // Check if the input is invalid or empty
            if (!input.value.trim()) {
                input.classList.add('shake'); // Add shake class

                // Remove the shake effect after the animation ends
                setTimeout(() => {
                    input.classList.remove('shake');
                }, 500); // Matches the duration of the animation (0.5s)
            }
        });
    });

</script>



<script>
    document.querySelectorAll('input.form-control').forEach(input => {
        // Handle blur event
        input.addEventListener('blur', function() {
            // Check if the input is not empty
            if (input.value.trim()) {
                // Set the border to light green on blur
                input.style.borderColor = 'rgb(16, 213, 16)';
            } else {
                // If input is empty, apply shake animation
                input.classList.add('shake'); // Add shake class

                // Remove the shake effect after the animation ends
                setTimeout(() => {
                    input.classList.remove('shake');
                }, 500); // Matches the duration of the animation (0.5s)
            }
        });

        // Handle focus event to reset border
        input.addEventListener('focus', function() {
            // Reset border color when focused
            input.style.borderColor = 'lightblue';
        });
    });

</script>
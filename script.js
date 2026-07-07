document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Dummy credentials
    const validEmail = "admin@gmail.com";
    const validPassword = "admin123";

    if(email === validEmail && password === validPassword){
        message.style.color = "green";
        message.textContent = "Login Successful!";
    }else{
        message.style.color = "red";
        message.textContent = "Invalid Email or Password!";
    }
});
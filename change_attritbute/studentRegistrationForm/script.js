document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Registration Successful!\nWelcome " + name);

});
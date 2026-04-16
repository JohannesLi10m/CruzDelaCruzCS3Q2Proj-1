let form = document.getElementById("form");


form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;
    let team = document.getElementById("team").value;
    let remember = document.getElementById("remember").checked;

    if(password !== confirmPassword){
        document.getElementById("result").innerHTML = "Passwords do not match";//passwords does not match, but form still submits somehow.//
        return;
    }
    alert("Form submitted!");
    if(remember){
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("age", age);
        localStorage.setItem("team", team);
    }

    window.location.href = "../index.html";
});
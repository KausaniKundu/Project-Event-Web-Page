function showTime() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("clock").innerHTML =
        "Current Time: " + hours + ":" + minutes + ":" + seconds;
}

setInterval(showTime, 1000);

showTime();


function checkForm() {

    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;
    let department = document.getElementById("department").value;
    let activity = document.getElementById("activity").value;

    let message = document.getElementById("message");

    if (name == "") {
        message.innerHTML = "Please enter your name.";
        return false;
    }

    if (email == "" || !email.includes("@")) {
        message.innerHTML = "Invalid email address";
        return false;
    }

    if (department == "") {
        message.innerHTML = "Please select your department.";
        return false;
    }

    if (activity == "") {
        message.innerHTML = "Please select an activity.";
        return false;
    }

    message.innerHTML = "Registration successful!";

    return false;
}
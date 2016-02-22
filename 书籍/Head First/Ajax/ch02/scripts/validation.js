window.onload = initPage;

function initPage() {
    document.getElementById("username").onblur = checkUsername;
    document.getElementById("register").disable = true;
}

function checkUsername() {
    document.getElementById("username").className = "thinking";
    request = new XMLHttpRequest();
    if (request === null) {
        alert("Unable to create request");
    } else {
        var theName = document.getElementById("username").value;
        var username = escape(theName);
        var url = "checkName.php?username=" + username;
        request.open("GET", url, true);
        request.onreadystatechange = showUsernameStatus;
        request.send(null);
    }
}

function showUsernameStatus() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            if (request.responseText === "okay") {
                document.getElementById("username").className = "approved";
                document.getElementById("register").disable = false;
            } else {
                document.getElementById("username").className = "denied";
                document.getElementById("username").focus();
                document.getElementById("username").select();
                document.getElementById("register").disable = true;
            }
        }
    }
}

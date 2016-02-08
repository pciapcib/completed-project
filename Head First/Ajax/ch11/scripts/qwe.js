window.onload = initPage;

var warnings = {
    "firstname": {
        "required": "Please enter in your first name.",
        "letters": "Only letters are allowed in a first name"
    },
    "lastname": {
        "required": "Please enter in your last name.",
        "letters": "Only letters are allowed in a last name"
    },
    "email": {
        "required": "Please enter in your e-mail address.",
        "format": "Please enter your e-mail in the form 'name@domain.com'"
    }
};

function initPage() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    firstname.addEventListener("blur", fieldIsFilled, false);
    firstname.addEventListener("blur", fieldIsLetters, false);
    lastname.addEventListener("blur", fieldIsFilled, false);
    lastname.addEventListener("blur", fieldIsLetters, false);
    email.addEventListener("blur", fieldIsFilled, false);
    email.addEventListener("blur", emailIsProper, false);
}

function fieldIsFilled() {
    if (this.value === "") {
        warn(this, "required");
    } else {
        unwarn(this, "required");
    }
}

function emailIsProper() {
    if (!/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(this.value)) {
        warn(this, "format");
    } else {
        unwarn(this, "format");
    }
}

function fieldIsLetters() {
    if (/[^a-zA-Z]/.test(this.value)) {
        warn(this, "letters");
    } else {
        unwarn(this, "letters");
    }
}

function warn(field, warningType) {
    var parentNode = field.parentNode;
    var warning = eval("warnings." + field.id + "." + warningType);
    if (parentNode.getElementsByTagName("p").length === 0) {
        var p = document.createElement("p");
        parentNode.appendChild(p);
        var warningNode = document.createTextNode(warning);
        p.appendChild(warningNode);
    } else {
        var p = parentNode.getElementsByTagName("p")[0];
        p.childNodes[0].nodeValue = warning;
    }
    document.getElementById("enroll").disabled = true;
}

function unwarn(field, warningType) {
    var parentNode = field.parentNode;
    if (parentNode.getElementsByTagName("p").length > 0) {
        var p = parentNode.getElementsByTagName("p")[0];
        var currentWarning = p.childNodes[0].nodeValue;
        console.log(1);
        var warning = eval("warnings." + field.id + "." + warningType);
        console.log(currentWarning);
        console.log(warning);
        if (currentWarning == warning) {
            parentNode.removeChild(p);
        }
    }
    var warnings = document.getElementById("content").getElementsByTagName("p");
    if (warnings.length === 0) {
        document.getElementById("enroll").disabled = false;
    }
}

window.onload = initPage;

function initPage() {
    var tabs = document.getElementById("tabs").getElementsByTagName("a");
    for (var i = 0; i < tabs.length; i++) {
        var currentTab = tabs[i];
        currentTab.onmouseover = showHint;
        currentTab.onmouseout = hideHint;
        currentTab.onclick = showTab;
    }
    var buttons = document.getElementById("navigation").getElementsByTagName("a");
    for (i = 0; i < buttons.length; i++) {
        var currentBtn = buttons[i];
        currentBtn.onmouseover = showHint;
        currentBtn.onmouseout = hideHint;
        currentBtn.onclick = showTab;
        currentBtn.onmouseover = buttonOver;
        currentBtn.onmouseout = buttonOut;
    }
}

function buttonOver () {
    this.className = "active";
}

function buttonOut () {
    this.className = "";
}

var welcomePaneShowing = true;

function showHint() {
    if (!welcomePaneShowing) {
        return;
    }
    var hintText;
    switch (this.title) {
        case "beginners":
            hintText = "Just getting started? Come join us!";
            break;
        case "intermediate":
            hintText = "Take your flexibility to the next level!";
            break;
        case "advanced":
            hintText = "Perfectly join your body and mind with these intensive workouts.";
            break;
        default:
            hintText = "Click a tab to display the course schedule for the selected class";
            break;
    }
    var contentPane = document.getElementById("content");
    contentPane.innerHTML = "<h3>" + hintText + "</h3>";
}

function hideHint() {
    if (welcomePaneShowing) {
        var contentPane = document.getElementById("content");
        contentPane.innerHTML = "<h3>Click a tab to display the course schedule for the selected class</h3>";
    }
}

function showTab() {
    var selectTab = this.title;
    if (selectTab == "welcome") {
        welcomePaneShowing = true;
        document.getElementById("content").innerHTML = "<h3>Click a tab to display the course schedule for the selected class</h3>";
    } else {
        welcomePaneShowing = false;
    }
    var tabs = document.getElementById("tabs").getElementsByTagName("a");
    for (var i = 0; i < tabs.length; i++) {
        var currentTab = tabs[i];
        if (currentTab.title == selectTab) {
            currentTab.className = "active";
        } else {
            currentTab.className = "inactive";
        }
    }
    if (selectTab != "welcome") {
        request = new XMLHttpRequest();
        if (request === null) {
            alert("Unable to create request");
            return;
        }
        request.open("GET", selectTab + ".html", true);
        request.onreadystatechange = showSchedule;
        request.send(null);
    }
}

function showSchedule() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            document.getElementById("content").innerHTML = request.responseText;
        }
    }
}

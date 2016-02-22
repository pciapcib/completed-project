window.onload = initPage;
var welcomePaneShowing = true;

function initPage() {
  var tabs =
    document.getElementById("tabs").getElementsByTagName("a");
  for (var i = 0; i < tabs.length; i++) {
    var currentTab = tabs[i];
    currentTab.onmouseover = showHint;
    currentTab.onmouseout = hideHint;
    currentTab.onclick = showTab;
  }

  var buttons =
    document.getElementById("navigation").getElementsByTagName("a");
  for (var i = 0; i < buttons.length; i++) {
    var currentBtn = buttons[i];
    addEventHandler(currentBtn, "mouseover", showHint);
    addEventHandler(currentBtn, "mouseout", hideHint);
    addEventHandler(currentBtn, "mouseover", buttonOver);
    addEventHandler(currentBtn, "mouseout", buttonOut);
    currentBtn.onclick = showTab;
  }
}

function showHint(e) {
  if (!welcomePaneShowing) {
    return;
  }
  var me = getActivatedObject(e);
  switch (me.title) {
    case "beginners":
      var hintText = "Just getting started? Come join us!";
      break;
    case "intermediate":
      var hintText = "Take your flexibility to the next level!";
      break;
    case "advanced":
      var hintText = "Perfectly join your body and mind " +
        "with these intensive workouts.";
      break;
    default:
      var hintText = "Click a tab to display the course " +
        "schedule for the class";
  }
  var contentPane = document.getElementById("content");
  contentPane.innerHTML = "<h3>" + hintText + "</h3>";
}

function hideHint(e) {
  if (welcomePaneShowing) {
    var contentPane = document.getElementById("content");
    contentPane.innerHTML =
      "<h3>Click a tab to display the course schedule for the class</h3>";
  }
}

function showTab(e) {
  var me = getActivatedObject(e);
  var selectedTab = me.title;
  if (selectedTab == "welcome") {
    welcomePaneShowing = true;
    document.getElementById("content").innerHTML =
      "<h3>Click a tab to display the course schedule for the class</h3>";
  } else {
    welcomePaneShowing = false;
  }

  var tabs = document.getElementById("tabs").getElementsByTagName("a");
  for (var i = 0; i < tabs.length; i++) {
    var currentTab = tabs[i];
    if (currentTab.title == selectedTab) {
      currentTab.className = 'active';
    } else {
      currentTab.className = 'inactive';
    }
  }

  var request = createRequest();
  if (request == null) {
    alert("Unable to create request");
    return;
  }
  request.onreadystatechange = showSchedule;
  request.open("GET", selectedTab + ".html", true);
  request.send(null);
}

function showSchedule() {
  if (request.readyState == 4) {
    if (request.status == 200) {
      document.getElementById("content").innerHTML = request.responseText;
    }
  }
}

function buttonOver(e) {
  var me = getActivatedObject(e);
  me.className = "active";
}

function buttonOut(e) {
  var me = getActivatedObject(e);
  me.className = "";
}

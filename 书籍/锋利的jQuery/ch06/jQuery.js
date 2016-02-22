var timestamp = 0;
updateMsg();

$('#chatform').submit(function() {
    $.post('backend.php', {
        message: $('#msg').val(),
        name: $('#author').val(),
        action: 'postmsg',
        time: timestamp
    }, function(xml) {
        $('#msg').val("");
        addMessages(xml);
    });
    return false;
});

function addMessages(xml) {
    if ($('status', xml).text() == "2") {
        return;
    }
    timestamp = $('time', xml).text();
    $('message', xml).each(function() {
        var author = $('author', this).text();
        var content = $('text', this).text();
        var htmlcode = "<strong>" + author + "</strong>:" + content + "<br>";
        $('#messagewindow').prepend(htmlcode);
    });
}

function updateMsg() {
    $.post('backend.php', {
        time: timestamp
    }, function(xml) {
        $('#loading').remove();
        addMessages(xml);
    });
    setTimeout('updateMsg()', 4000);
}

$('a.tooltip').mouseover(function(e) {
    $title = $(this).attr("title");
    $(this).removeAttr('title');
    $div = $('<div></div>').append($title).attr('id', 'tooltip');
    $('body').append($div);
    $div.css({
        "left": (e.pageX + 20) + "px",
        "top": (e.pageY + 10) + "px"
    }).show("fast");
}).mousemove(function(e) {
    $div.css({
        "left": (e.pageX + 20) + "px",
        "top": (e.pageY + 10) + "px"
    });
}).mouseout(function() {
    $div.remove();
    $(this).attr('title', $title);
});

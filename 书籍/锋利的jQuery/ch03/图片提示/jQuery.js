$('a.tooltip').mouseover(function(e) {
    $href = $(this).attr("href");
    $title = $(this).attr("title");
    $(this).removeAttr('title');
    $div = $('<div></div>').attr('id', 'tooltip');
    $img = $('<img>').attr({
        "src": $href,
        "alt": "产品预览图"
    });
    $div.append($img).append('<br>'+$title);
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

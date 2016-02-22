// var parent = $(this).parents('div.v_show');
var v_show = $('div.v_content_list');
var v_content = $('div.v_content');

var page = 1;
var i = 4;

var v_width = v_content.width();
var len = v_show.find('li').length;
var page_count = Math.ceil(len / i);
console.log(len);


$('span.next').click(function() {
    if (!v_show.is(':animated')) {
        if (page == page_count) {
            v_show.animate({
                left: "0px"
            }, "normal");
            page = 1;
            console.log(page);
        } else {
            v_show.animate({
                left: "-=" + v_width
            }, "normal");
            page++;
            console.log(page);
        }

        $('div.highlight_tip').find('span')
            .eq(page - 1).addClass('current')
            .siblings().removeClass();
    }
});

$('span.prev').click(function() {
    if (!v_show.is(':animated')) {
        if (page == 1) {
            v_show.animate({
                left: "-=" + v_width * (page_count - 1) + "px"
            }, "normal");
            page = i;
            console.log(page);
        } else {
            v_show.animate({
                left: "+=" + v_width
            }, "normal");
            page--;
            console.log(page);
        }

        $('div.highlight_tip').find('span')
            .eq(page - 1).addClass('current')
            .siblings().removeClass();
    }
});

var $category = $('ul li:gt(5):not(:last)');
$category.hide();

var $toggleBtn = $('div.showmore > a');
$toggleBtn.click(function() {
    if ($category.is(':hidden')) {
        $category.show();
        $(this).find('span').text("精简显示品牌")
            .css('background-image', 'url(img/up.gif)');
        $('ul li').filter(':contains("佳能"),:contains("尼康"),:contains("奥林巴斯")')
            .addClass('promoted');
    } else {
        $category.hide();
        $(this).find('span').text("全部显示品牌")
            .css('background-image', 'url(img/down.gif)');
        $('ul li').filter(':contains("佳能"),:contains("尼康"),:contains("奥林巴斯")')
            .removeClass('promoted');
    }
    return false;
});

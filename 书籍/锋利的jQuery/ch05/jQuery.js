$('#skin li').click(function() {
    $(this)
        .addClass('selected')
        .siblings().removeClass('selected');
    $('#cssfile').attr('href', 'css/' + this.id + '.css');
});

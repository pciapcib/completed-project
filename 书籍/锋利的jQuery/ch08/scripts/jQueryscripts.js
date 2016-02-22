$(function() {
    inputFocus();
    topNavShow();
    addhot();
    ad();
    toolTip();
    imgSlide();
    imgHover();
    imgZoom();
    switchImg();
    tab();
    switchColor();
    size();
    numAndPrice();
    star();
    finish();
});

function inputFocus() {
    $('#search').focus(function() {
        $(this).addClass('focus');
        if ($(this).val() == this.defaultValue) {
            $(this).val("");
        }
    }).blur(function() {
        $(this).removeClass('focus');
        if ($(this).val() === "") {
            $(this).val(this.defaultValue);
        }
    }).keyup(function(e) {
        if (e.which == 13) {
            alert("回车提交搜索！");
        }
    });
}

function topNavShow() {
    $('#topNav li').hover(function() {
        $(this).find('.moreNav').show();
    }, function() {
        $(this).find('.moreNav').hide();
    });
}

function addhot() {
    $('#asideNav a.hot').append('<i class="hot"></i>');
}

function ad() {
    var index = 0;
    var bannerNavList = $('#bannerNav li');
    bannerNavList.mouseover(function() {
        index = bannerNavList.index(this);
        showImage(index);
    }).eq(0).mouseover();

    var adTimer = null;
    var len = bannerNavList.length;
    $('#bannerNav').hover(function() {
        if (adTimer) {
            clearInterval(adTimer);
        }
    }, function() {
        adTimer = setInterval(function() {
            showImage(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 5000);
    }).trigger('mouseleave');
}

function showImage(index) {
    var newhref = $('#bannerNav')
        .find('a').eq(index).attr('href');
    $('#bannerWarp').attr('href', newhref)
        .find('img').eq(index).stop(true, true).fadeIn()
        .siblings().fadeOut();
    $('#bannerNav')
        .find('a').removeClass('active')
        .eq(index).addClass('active');
}

function toolTip() {
    var x = 10,
        y = 20,
        title;
    $('#asideNews a').mouseover(function(e) {
        title = this.title;
        this.title = "";
        var tooltipDiv = '<div id="tooltip">' + title + '</div>';
        $('body').append(tooltipDiv);
        $('#tooltip').css({
            left: (e.pageX + x) + "px",
            top: (e.pageY + y) + "px"
        });
    }).mouseout(function() {
        this.title = title;
        $('#tooltip').remove();
    }).mousemove(function(e) {
        $('#tooltip').css({
            left: (e.pageX + x) + "px",
            top: (e.pageY + y) + "px"
        });
    });
}

function imgSlide() {
    var bottomTitleLink = $('#bottomTitle li a');
    bottomTitleLink.click(function() {
        $(this).parent().addClass('current')
            .siblings().removeClass('current');
        var index = bottomTitleLink.index(this);
        showBrand(index);
        return false;
    }).eq(0).click();
}

function showBrand(index) {
    var scrollBox = $('#bottomScroll');
    var scrollWidth = scrollBox.width();
    scrollBox.find('ul').stop(true).animate({
        left: -scrollWidth * index,
    }, 1000);

}

function imgHover() {
    $('#bottomScroll li > a').hover(function() {
        var glassDiv = '<div id="glass"></div>';
        $(this).append(glassDiv);
    }, function() {
        $('#glass').remove();
    });
}

function imgZoom() {
    var shopImage = $('#shopImage');
    var magnify = $('#magnify');
    var magnifyShow = $('#magnifyShow');
    var magnifyTitle = $('#magnifyTitle');
    var magnifyShowImg = $('#magnifyShowImg');

    shopImage.mouseover(function() {
        magnify.show();
        magnifyShow.show();

        var image = shopImage.find('img');
        magnifyTitle.text(image.attr("alt"));

        var imgSrc = image.attr("src");
        var point = imgSrc.lastIndexOf(".");
        var underline = imgSrc.lastIndexOf("_");

        var imgType = imgSrc.substring(point);
        var newImgsrc = imgSrc.substring(0, underline) + "_big" + imgType;
        magnifyShowImg.attr("src", newImgsrc);
    }).mousemove(function(e) {
        var offset = shopImage.offset();

        var x = e.pageX - offset.left - magnify.width() / 2;
        var criticalX = shopImage.width() - magnify.width() - 1;

        var y = e.pageY - offset.top - magnify.height() / 2;
        var criticalY = shopImage.height() - magnify.height() - 1;

        var finalX, finalY;

        if (x >= -1 && x <= criticalX) {
            finalX = x;
        } else if (x > criticalX) {
            finalX = criticalX;
        } else {
            finalX = -1;
        }

        if (y >= -1 && y <= criticalY) {
            finalY = y;
        } else if (y > criticalY) {
            finalY = criticalY;
        } else {
            finalY = -1;
        }

        magnify.css({
            left: finalX + 'px',
            top: finalY + 'px'
        });

        if (x < 0) {
            finalX = 0;
        } else if (x > criticalX) {
            finalX = criticalX - 1;
        }

        if (y < 0) {
            finalY = 0;
        } else if (y > criticalY) {
            finalY = criticalY - 1;
        }

        var proportion = magnifyShow.width() / magnify.width();
        var proportionX = -finalX * proportion;
        var proportionY = -finalY * proportion;

        magnifyShowImg.css({
            left: proportionX + "px",
            top: proportionY + "px"
        });
    }).mouseout(function() {
        magnify.hide();
        magnifyShow.hide();
    });
}

function switchImg() {
    $('#preview img').click(function() {
        var imgSrc = $(this).attr("src");
        var point = imgSrc.lastIndexOf(".");
        var imgType = imgSrc.substring(point);
        var imgSmall = imgSrc.substring(0, point) + "_small" + imgType;
        var imgBig = imgSrc.substring(0, point) + "_big" + imgType;
        $('#shopImage img').attr('src', imgSmall);
        $('#look a').attr('href', imgBig);
    });
}

function tab() {
    var introTag = $('#introTag li');
    introTag.click(function() {
        $(this).addClass("active")
            .siblings().removeClass("active");
        var index = introTag.index(this);
        $('#introTab .shopIntro').hide()
            .eq(index).show();
    }).eq(0).click();
}

function switchColor() {
    $('#color a').click(function() {
        $(this)
            .parent().addClass('active')
            .siblings().removeClass('active');

        var imgSrc = $(this).find('img').attr("src");
        var point = imgSrc.lastIndexOf(".");
        var imgType = imgSrc.substring(point);
        var slash = imgSrc.lastIndexOf("/");
        var color = imgSrc.substring(slash + 1, point);

        $('#preview img').each(function() {
            var previewImgSrc = $(this).attr("src");
            slash = previewImgSrc.lastIndexOf("/");
            var underline = previewImgSrc.lastIndexOf("_");
            point = previewImgSrc.lastIndexOf(".");
            var imgOrder = previewImgSrc.substring(underline, point);
            var newPreviewImgSrc = previewImgSrc.substring(0, slash + 1) + color + imgOrder + imgType;
            $(this).attr("src", newPreviewImgSrc);
        }).eq(0).click();

        var alt = $(this).find('img').attr("alt");
        $(this).parents('#color').find('strong').text(alt);
    });
}

function size() {
    $('#size li').click(function() {
        var size = $(this).text();
        $(this).addClass('active')
            .siblings().removeClass('active');
        $(this)
            .parent()
            .siblings('strong').removeClass('active').text(size);
    });
}

function numAndPrice() {
    var unitPrice = Number($('#sale strong').text());
    $('#shopNumber').change(function() {
        var number = $(this).val();
        $('#all strong').text(unitPrice * number);
    }).change();
}

function star() {
    var score = $('#score ul');
    score.find("li").hover(function() {
        var starNum = $(this).attr("class");
        score.addClass(starNum);
    }, function() {
        var starNum = $(this).attr("class");
        score.removeClass(starNum);
    }).click(function() {
        var starNum = $(this).attr("class");
        score.removeClass().addClass(starNum + "Click");
        alert("您给此商品的评分是: " + $(this).attr("title"));
    });
}

function finish() {
    $('#shopcar').click(function() {
        var shopName = $('#intro h4').text();
        var shopSize = $('#size strong').text();
        var shopColor = $('#color strong').text();
        var shopNumber = $('#shopNumber').val();
        var shopPrice = $('#all strong').text();
        var log = "感谢您的购买！\n" + "您购买的\n" + "产品是： " + shopName + "\n" + "尺寸是： " + shopSize + "\n" + "颜色是： " + shopColor + "\n" + "数量是： " + shopNumber + "\n" + "总价是： " + shopPrice + "。";
        alert(log);
    });
}

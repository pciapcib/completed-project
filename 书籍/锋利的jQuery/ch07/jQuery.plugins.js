;
(function($) {
    $.fn.extend({
        "color": function(value) {
            return this.css("color", value);
        },
        "alterBgColor": function(options) {
            options = $.extend({
                odd: "odd",
                even: "even",
                selected: "selected"
            }, options);
            $('tbody>tr:odd', this).addClass(options.odd);
            $('tbody>tr:even', this).addClass(options.even);
            $('tbody>tr', this).click(function() {
                var hasSelected = $(this).hasClass(options.selected);
                $(this)[hasSelected ? removeClass : addClass](options.selected)
                    .find(':checkbox').prop('checked', !hasSelected);
            });
            $('tbody>tr:hasClass(:checked)', this).addClass(options.selected);
            return this;
        }
    });

    $.extend({
        "ltrim": function(text) {
            return (text || "").replace(/^\s*/);
        },
        "rtrim": function(text) {
            return (text || "").replace(/\s*$/);
        }
    });

    $.extend(
        $.expr[":"], {
            between: function(a, i, m) {
                var tmp = m[3].split(",");
                return tmp[0] - 0 < i && i < tmp[1] - 0;
            }
        });

})(jQuery);

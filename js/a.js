$(function() {
    $('body').append('<div class="topbar"><i class="icon icon-fanhuidingbu1"></i></div>')
    var timer, is, topbar = $('.topbar')
    function scroll() {
        var stop = $(document).scrollTop()
        if (stop >= 600) {
            is || (topbar.show(), is = 1)
        } else {
            is && (topbar.hide(), is = 0)
        }
    }
    $(document).on('scroll', function() {
        if (timer) clearTimeout(timer)
        timer = setTimeout(function() {
            scroll()
        }, 100)
    })
    $(document).on('click', '.topbar', function() {
        $('body,html').animate({ scrollTop: 0 }, 200)
    })
})

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e3220b1c82bf99528bdc24ccb32e00e9";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

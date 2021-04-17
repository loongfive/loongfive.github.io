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

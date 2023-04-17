;(function () {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<div class="topbar"><i class="icon icon-fanhuidingbu1"></i></div>'
  )

  var timer, is, topbar = document.querySelector('.topbar')

  function scroll() {
    var stop = document.documentElement.scrollTop
    if (stop >= 600) {
      is || (topbar.style.display = 'block', is = 1)
    } else {
      is && (topbar.style.display = 'none', is = 0)
    }
  }

  window.addEventListener('scroll', function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(function() {
      scroll()
    }, 100)
  })

  topbar.addEventListener('click', function () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  })
}())

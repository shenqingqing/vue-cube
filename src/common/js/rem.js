// (function (doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function () {
//       var clientWidth = docEl.clientWidth
//       if (!clientWidth) return
//       docEl.style.fontSize = 50 * (clientWidth / 375) + 'px'
//     }
//   if (!doc.addEventListener) return
//   win.addEventListener(resizeEvt, recalc, false)
//   doc.addEventListener('DOMContentLoaded', recalc, false)
// })(document, window)
let pxPerRem = 0
let defaultSize = 375

function getWindowWidth () {
  return window.innerWidth || document.documentElement.clientWidth
}
function getFontSize () {
  return 50 * (getWindowWidth() / defaultSize)
}
function initFontSizeToStyle () {
  pxPerRem = getFontSize()
  document.documentElement.style.fontSize = `${pxPerRem}px`
}

window.addEventListener('resize', initFontSizeToStyle)
document.addEventListener('DOMContentLoaded', initFontSizeToStyle)

export default {
  getPxPerRem () {
    return pxPerRem
  }
}

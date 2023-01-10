// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })

// function onCloseButton(){
//   if($("#navbarNav").hasClass('show')){
//     $('#navbarNav').removeClass('show')
//   }
// }

function goToSession(session) {
  window.location.href = session;
}

$('#teaser-video').mouseover(function(){
  $('#teaser-video').get(0).play()
})

var btnWhite = false
setInterval(function(){
  const bgColor = btnWhite === true ? 'white' : '#0b4f17'
  const txtColor = btnWhite === true ? '#00b802' : 'white'
  $('#btn-apply').css('background-color', bgColor)
  $('#btn-apply').css('color', txtColor)
  btnWhite = !btnWhite
}, 750)
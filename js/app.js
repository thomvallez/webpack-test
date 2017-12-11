import config from './config.js'

document.getElementById('button').addEventListener('click', function() {
  // jQuery here
  import('jquery').then(($) => {
    $('body').css('backgroundColor', '#DDD');
  })
})

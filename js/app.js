import config from './config.js'
import css from './app.scss'

console.log(css);

document.getElementById('button').addEventListener('click', function() {
  // jQuery here
  import('jquery').then(($) => {
    $('body').css('backgroundColor', '#DDD');
  })
})

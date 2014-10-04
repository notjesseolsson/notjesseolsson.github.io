window.addEventListener('load', function() {
  var toggle = document.querySelector('paper-toggle-button')
  var body = document.body
  toggle.addEventListener('change', function() {
      body.classList.toggle('orange')
      if (toggle.checked)
        document.querySelector('#orangeMessage').show()
      else
        document.querySelector('#greenMessage').show()
  })
})

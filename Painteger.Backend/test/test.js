var image = document.querySelector('#image')
var style = document.querySelector('#style')
var btn = document.querySelector('#upload')
btn.addEventListener('click', getImage);

function getImage() {
var data = new FormData()
data.append('image', image.files[0])
data.append('style', style.files[0])
data.append('user', 'hubot')

fetch('http://127.0.0.1:5000/loadImage', {
  method: 'POST',
  body: data
})
}

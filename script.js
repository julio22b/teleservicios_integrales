let map = L.map('map').setView([10.252920, -67.605651], 15);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3txj5hl6Ekj9kDi7RgZD', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(map);

let marker = L.marker([10.252920, -67.605651]).addTo(map)
marker.bindPopup('<b> C.C La Hormiga </b><br> Local 11.').openPopup()
const toggleMenu = document.getElementById('toggle')
toggleMenu.addEventListener('click', onClickMenu)

let change = document.querySelector('.change')

function onClickMenu(){
    document.querySelector('.change').classList.toggle('list')
    document.querySelector('.menu-container').classList.toggle('change-bg')
}

const bottoms = document.getElementsByClassName('bottom')
const tops = document.getElementsByClassName('top')


for (let index = 0; index < bottoms.length; index++) {
    tops[index].addEventListener('click', function(e){
        tops[index].classList.toggle('transparent')
        bottoms[index].classList.toggle('transparent')
    })
}





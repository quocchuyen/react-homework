const pokemons = [
    { id: 1, name: 'Charmander', hp: 39, atk: 52 , img: 'charmander.png'},
    { id: 2, name: 'Pikachu', hp: 35, atk: 55 , img: 'pikachu.png' },
    { id: 3, name: 'Squirtle', hp: 44, atk: 48 , img: 'squirtle.png' },
    { id: 4, name: 'Bulbasaur', hp: 45, atk: 49 , img: 'bulbasaur.png' },

    { id: 5, name: 'Mew', hp: 100, atk: 100 , img: 'mew.png' },
    { id: 6, name: 'Pidgey', hp: 40, atk: 45 , img: 'pidgey.png' },
    { id: 7, name: 'Abra', hp: 25, atk: 20, img: 'abra.png' },
    { id: 8, name: 'Snorlax', hp: 160, atk: 110, img: 'snorlax.png' },

    { id: 9, name: 'Caterpie', hp: 45, atk: 30, img: 'caterpie.png' },
    { id: 10, name: 'Dratini', hp: 41, atk: 64, img: 'dratini.png' },
    { id: 11, name: 'Eevee', hp: 55, atk: 55, img: 'eevee.png' },
    { id: 12, name: 'Jigglypuff', hp: 115, atk: 45, img: 'jigglypuff.png' }
]
const figures = document.querySelector('.choose-figure')
const infoFigure = document.querySelector('.info-figure')
pokemons.forEach(child => {
  const div = document.createElement('div')
  const p = document.createElement('p')
  const img = document.createElement('img')
  img.src = 'img/' + child.img
  div.appendChild(img)
  figures.appendChild(div)
})
const figure = document.querySelectorAll('.choose-figure div')
const imgAvt = document.querySelector('.img-avt')
const name = document.querySelector('.name')
const hp = document.querySelector('.hp')
const atk = document.querySelector('.atk')
const energyHp = document.querySelector('.energy-bar-hp span')
const energyAtk = document.querySelector('.energy-bar-atk span')
const show = document.querySelector('.show')
const add = document.querySelector('.add-figure')
const infoImg = document.querySelector('.img-avt')
const title = document.querySelector('.title')
const inpTitle = document.querySelector('.inp-edit-title')
for (let i = 0; i < figure.length; i++) {
  figure[i].addEventListener('click', () => {
    imgAvt.src = 'img/' + pokemons[i].img
    name.textContent = pokemons[i].name
    hp.textContent = 'HP  ' + pokemons[i].hp
    atk.textContent = 'ATK ' + pokemons[i].atk
    energyHp.style.width = pokemons[i].hp + 'px'
    energyAtk.style.width = pokemons[i].atk + 'px'
    add.addEventListener('click', () => {
      figure[i].style.opacity = '0.5'
    })
  })
}
add.addEventListener('click', (e) => {
  const count = document.querySelectorAll('.show span')
  const warning = document.querySelector('.warning')
  if (count.length > 4) {
    warning.style.color = 'red'
    warning.innerText = 'You have selected 5 pokemon'
    e.preventDefault()
  } else {
    warning.innerText = ''
    const span = document.createElement('span')
    const i = document.createElement('i')
    i.className = 'remove'
    i.textContent = 'x'
    span.classList.add('show-figure')
    const img = document.createElement('img')
    img.src = infoImg.src
    span.appendChild(i)
    span.appendChild(img)
    show.appendChild(span)
    const removeFigure = document.querySelectorAll('.remove')
    const showFigure = document.querySelectorAll('.show-figure')
    for (let i = 0; i < showFigure.length; i++) {
      removeFigure[i].addEventListener('click', () => {
        show.removeChild(showFigure[i])
      })
      const imgResult = document.querySelectorAll('.show-figure img')
      for (let j = i + 1; j < showFigure.length; j++) {
        if (imgResult[i].src === imgResult[j].src) {
          show.removeChild(showFigure[j])
        }
      }
    }
  }
})
title.addEventListener('dblclick', () => {
  title.style.display = 'none'
  inpTitle.style.display = 'block'
})
inpTitle.addEventListener('keyup', () => {
  title.textContent = inpTitle.value
})
inpTitle.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    title.style.display = 'block'
    inpTitle.style.display = 'none'
  }
})

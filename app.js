const dataSlides = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2090&q=80',
    bacground: '#dbe6fd',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
    bacground: '#ffb4b4',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1069&q=80',
    bacground: '#faf3f3',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80',
    bacground: '#cdac81',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
    bacground: '#75cac3',
  },
]

const conatiner = document.querySelector('.container')
const body = document.querySelector('body')

function slidesPlugin(value) {
  dataSlides.forEach((slide, index) => {
    const div = document.createElement('div')
    const title = document.createElement('h3')
    conatiner.appendChild(div)
    div.appendChild(title)

    if (index === value) {
      div.classList.add('active')
    }

    div.classList.add('slide')

    div.style.backgroundImage = `url(${slide.src})`
    title.textContent = `Japan ${slide.id}`
  })

  const slides = document.querySelectorAll('.slide')

  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      clearActiveClasses()
      body.style.backgroundColor = `${dataSlides[index].bacground}`
      slide.classList.add('active')
    })
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}

slidesPlugin(0)

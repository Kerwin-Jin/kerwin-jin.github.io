const sideMenu = document.querySelector('#side-menu')
const nav = document.querySelector('nav')
const navLinks = document.querySelector('nav ul')

function openSideMenu(){
  sideMenu.style.transform = 'translateX(-16rem)'
}

function closeSideMenu(){
  sideMenu.style.transform = 'translateX(16rem)'
}


function toggleTheme(){
  document.documentElement.classList.toggle('dark')
  // if(document.documentElement.classList.contains('dark')){
  //   localStorage.theme = 'dark'
  // }else{
  //   localStorage.theme = 'light'
  // }
}


window.addEventListener('scroll',()=>{
  if(scrollY>50){
    nav.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
    navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')
  }else{
    nav.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
    navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50')
  }
})






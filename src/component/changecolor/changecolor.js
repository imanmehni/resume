export default (page,defaultBackground,background,defaultColor,color)=>{
    page.style.transition="background-color 1s ease-in-out"
    page.style.background=page.style.background===background?defaultBackground:background
    Array.from(page.children).forEach(e=>e.style.color=e.style.color===color?defaultColor:color)
  }
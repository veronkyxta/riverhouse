/* const header = document.getElementById('fix');

window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    header.style.display = "block";
  }
  
    if (event.deltaY < 0) {
        header.style.display = "none";
    } 
  
}); */
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.list'),
    menuItem = document.querySelectorAll('.list__item'),
    hamburger = document.querySelector('.hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('list_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('list_active');
        })
    })
  })
  

// Ensure DOM is loaded before creating menus
window.addEventListener('DOMContentLoaded', (event) => {
  createMenu('primary', '.site-header__right-content', 'site-header__right-content--active');
});

const createMenu = (menuId, menuClass, menuActiveClass) => {

  const menuIcon = document.querySelector(`[data-menu-id=${menuId}]`);
  let menuIsOpen = false;

  // Listen for document clicks and close the menu if a click is outside of the
  // menu, the menu is open and the click isn't on the menu icon
  document.addEventListener('click', (event) => {
    if (menuIsOpen && !event.target.closest(menuClass) && event.target !== menuIcon) {
      toggleMenu();
    }
  });

  menuIcon.addEventListener('click', toggleMenu);

  // Determine whether the active class should be added or removed
  function toggleMenu() {
    const menu = document.querySelector(menuClass);
    const classListArray = [ ...menu.classList ];

    // Check the class array to see if the active class is there
    // and remove it if so
    if (classListArray.find(className => className === menuActiveClass)) {
      menu.classList.remove(menuActiveClass);
      menuIsOpen = false;
    } else {
      menu.classList.add(menuActiveClass);
      menuIsOpen = true;
    }
  }
}

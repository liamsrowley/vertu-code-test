
// Ensure DOM is loaded before creating menus
window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('[data-tab-id]').forEach(tab => {
    tab.addEventListener('click', createTab);
  });
});

const createTab = (event) => {
  const tabHeaderClassName = '.tabs__header__list__item';
  const tabHeaderActiveClassName = 'tabs__header__list__item--active';
  const tabClassName = '.tabs__content__item';
  const tabActiveClassName = 'tabs__content__item--active';

  hideTabs();
  const tab = event.target;
  const tabId = tab.getAttribute('data-tab-id');
  displayCurrentTab();

  function hideTabs() {
    document.querySelectorAll(tabHeaderClassName).forEach(tabHeader => {
      tabHeader.classList.remove(tabHeaderActiveClassName);
    })
  }

  function displayCurrentTab() {
    document.querySelector(`[data-tab-item-id=${tabId}]`).classList.add(tabActiveClassName);
    tab.classList.add(tabHeaderActiveClassName);
  }
}

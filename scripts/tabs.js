
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

  const currentTabHeader = event.target;
  const tabId = currentTabHeader.getAttribute('data-tab-id');

  const currentTabItem = document.querySelector(`[data-tab-item-id=${tabId}]`);
  const tabList = document.querySelectorAll('[data-tab-item-id]');
  const tabHeaders = document.querySelectorAll('[data-tab-id]');

  hideTabs();
  displayCurrentTab();

  function hideTabs() {
    tabHeaders.forEach(tabHeader => {
      tabHeader.classList.remove(tabHeaderActiveClassName);
    })

    tabList.forEach(tabItem => {
      tabItem.classList.remove(tabActiveClassName);
    })
  }

  function displayCurrentTab() {
    currentTabItem.classList.add(tabActiveClassName);
    currentTabHeader.classList.add(tabHeaderActiveClassName);
  }
}

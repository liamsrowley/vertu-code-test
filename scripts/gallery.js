document.addEventListener('DOMContentLoaded', () => {
  const activeGalleryClass = 'gallery__item--active';

  const galleryItems = document.querySelectorAll('[data-gallery-id]');

  const prevItemIcon = document.querySelector('[data-gallery-prev]');
  const nextItemIcon = document.querySelector('[data-gallery-next]');
  const counter = document.querySelector('[data-gallery-counter]');

  const totalItems = galleryItems.length;
  let currentItemId = 1;

  setCounter(1);

  prevItemIcon.addEventListener('click', () => {
    removeActiveGalleryItem();
    setPrevItem();
  });

  nextItemIcon.addEventListener('click', () => {
    removeActiveGalleryItem();
    setNextItem();
  });


  function setNextItem() {
    if (currentItemId === totalItems) {
      currentItemId = 1;
    } else {
      currentItemId++;
    }
    setActiveGalleryItem();
  }

  function setPrevItem() {
    if (currentItemId === 1) {
      currentItemId = totalItems
    } else {
      currentItemId--;
    }
    setActiveGalleryItem();
  }

  function setActiveGalleryItem() {
    console.log(currentItemId);
    const nextItem = document.querySelector(`[data-gallery-id='${currentItemId}']`);
    nextItem.classList.add(activeGalleryClass);
    setCounter(currentItemId);
  }

  function setCounter(value) {
    counter.innerHTML = `${value} / ${galleryItems.length}`;
  }

  function removeActiveGalleryItem() {
    galleryItems.forEach(item => {
      item.classList.remove(activeGalleryClass);
    })
  }

});

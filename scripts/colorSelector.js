// Wait for DOM to load before executing code
document.addEventListener('DOMContentLoaded', () => {

  const activeClassName = 'color-selector__swatch--active';
  const activeColorGroupClassName = 'color-selector__group--active';
  const activeColorGroupControlClassName = 'color-type__item--active';

  const colorGroupControls = document.querySelectorAll('[data-color-group-control]');
  const colorGroups = document.querySelectorAll('[data-color-group]');

  const swatches = document.querySelectorAll('[data-swatch-name]');
  const swatchImage = document.querySelector('[data-swatch-image]');

  // Set the background color for each swatch and add the click listener
  swatches.forEach(swatch => {
    swatch.style.background = swatch.getAttribute('data-swatch-color');
    swatch.addEventListener('click', () => setActiveColor(swatch));
  });

  colorGroupControls.forEach(colorGroup => {
    colorGroup.addEventListener('click', () => setActiveColorGroup(colorGroup));
  });

  function setActiveColorGroup(colorGroup) {
    removeActiveColorGroup();
    colorGroup.classList.add(activeColorGroupControlClassName);
    document.querySelector(`[data-color-group=${colorGroup.getAttribute('data-color-group-control')}]`).classList.add(activeColorGroupClassName);
  }

  function setActiveColor(swatch) {
    removeActiveColor();
    swatch.classList.add(activeClassName);
    swatchImage.setAttribute('src', `images/vehicle_${swatch.getAttribute('data-swatch-name')}.webp`);
  }

  function removeActiveColor() {
    swatches.forEach(swatch => {
      swatch.classList.remove(activeClassName);
    });
  }

  function removeActiveColorGroup() {
    colorGroups.forEach(colorGroup => {
      colorGroup.classList.remove(activeColorGroupClassName);
    });

    colorGroupControls.forEach(colorGroup => {
      colorGroup.classList.remove(activeColorGroupControlClassName);
    });
  }

});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const changeColorHandler = () => {
  const bodyElement = document.querySelector('body');

  bodyElement.style.backgroundColor = getRandomHexColor();

  const textColor = document.querySelector('p .color');

  textColor.textContent = bodyElement.style.backgroundColor;
};
changeColorButton.addEventListener('click', changeColorHandler);


/**
 * Adds grid squares to the document body
 */
function addGridSquares() {
  const gridContainer = document.createElement('div');
  gridContainer.id = 'grid-container';

  // TODO variable grid size
  for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');

    square.addEventListener('mouseover', () => {
      square.classList.add('filled-in');
    });

    gridContainer.appendChild(square);
  }

  document.body.appendChild(gridContainer);
}

addGridSquares();

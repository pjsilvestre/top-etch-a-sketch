/**
 * Gets the document's main div container
 * @return {Element} The main div container
 */
function getGridContainer() {
  return document.querySelector('#grid-container');
}

/**
 * Adds grid squares to the main div container
 */
function addGridSquares() {
  const gridContainer = getGridContainer();

  // TODO variable grid size
  for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid-square');
    gridContainer.appendChild(grid);
  }
}

addGridSquares();

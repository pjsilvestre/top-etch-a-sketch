/**
 * Creates the grid and appends it to the document's body
 * @param {Number} squaresPerRow The desired number of squares per row
 */
function addGridSquares(squaresPerRow) {
  if (typeof squaresPerRow !== 'number') {
    console.trace(`addGridSquares invoked with non-number argument: ` +
      `${squaresPerRow}`);
    return;
  }

  const gridContainer = document.createElement('div');
  gridContainer.id = 'grid-container';

  const gridStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${squaresPerRow}, ${960 / squaresPerRow}px)`,
    gridTemplateColumns: `repeat(${squaresPerRow}, ${960 / squaresPerRow}px)`,
  };

  Object.assign(gridContainer.style, gridStyle);

  for (let i = 0; i < squaresPerRow * squaresPerRow; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');

    square.addEventListener('mouseover', () => {
      square.classList.add('filled-in');
    });

    gridContainer.appendChild(square);
  }

  document.body.appendChild(gridContainer);
}

/**
 * Resets the grid
 */
function resetGrid() {
  const gridContainer = document.getElementById('grid-container');
  document.body.removeChild(gridContainer);
  addGridSquares(defaultSquaresPerRow);
}

/**
 * Initializes the reset button
 */
function initializeResetButton() {
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', () =>
    resetGrid(),
  );
}

const defaultSquaresPerRow = 16;
addGridSquares(defaultSquaresPerRow);
initializeResetButton();

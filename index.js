const defaultSquaresPerRow = 16;
const minSquaresPerRow = 1;
const maxSquaresPerRow = 100;
initializeGrid(defaultSquaresPerRow);
initializeResetButton();

/**
 * Creates the grid and appends it to the document's body
 * @param {Number} squaresPerRow The desired number of squares per row
 */
function initializeGrid(squaresPerRow) {
  if (typeof squaresPerRow !== 'number') {
    console.trace(`initializeGrid invoked with non-number argument: ` +
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
 * @param {Number} squaresPerRow The desired number of squares per row
 */
function resetGrid(squaresPerRow) {
  if (typeof squaresPerRow !== 'number') {
    console.trace(`resetGrid invoked with non-number argument: ` +
      `${squaresPerRow}`);
    return;
  }

  const gridContainer = document.getElementById('grid-container');
  document.body.removeChild(gridContainer);
  initializeGrid(squaresPerRow);
}

/**
 * Initializes the reset button
 */
function initializeResetButton() {
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', () =>
    resetGrid(promptUserSquaresPerRow()),
  );
}

/**
 * Prompt user to input desired number of squares per row
 * @return {Number} The desired number of squares per row
 */
function promptUserSquaresPerRow() {
  let squaresPerRow = parseInt(prompt('Number of squares per row? ' +
    `(min: ${minSquaresPerRow}, max: ${maxSquaresPerRow})`,
  defaultSquaresPerRow));

  while (squaresPerRow < minSquaresPerRow|| 100 < squaresPerRow) {
    squaresPerRow = parseInt(prompt('Number of squares per row? ' +
    `(min: ${minSquaresPerRow}, max: ${maxSquaresPerRow})`,
    defaultSquaresPerRow));
  }

  return squaresPerRow;
}

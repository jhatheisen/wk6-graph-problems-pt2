function getNeighbors(row, col, matrix) {
  let neighbors = [];
  // vars that say if there is a top, bot, left, or right
  let top = row - 1 > -1;
  let bot = row + 1 < matrix.length;
  let left = col - 1 > -1;
  let right = col + 1 < matrix[row].length;
  // Check top
  if (top) {
    if (matrix[row - 1][col]) neighbors.push([row - 1, col]);
  }
  // Check top left
  if (top && left) {
    if (matrix[row - 1][col - 1]) neighbors.push([row - 1, col - 1]);
  }
  // Check top right
  if (top && right) {
    if (matrix[row - 1][col + 1]) neighbors.push([row - 1, col + 1]);
  }
  // Check bottom
  if (bot) {
    if (matrix[row + 1][col]) neighbors.push([row + 1, col]);
  }
  // Check bottom left
  if (bot && left) {
    if (matrix[row + 1][col - 1]) neighbors.push([row + 1, col - 1]);
  }
  // Check left
  if (left) {
    if (matrix[row][col - 1]) neighbors.push([row, col - 1]);
  }
  // Check bottom right
  if (bot && right) {
    if (matrix[row + 1][col + 1]) neighbors.push([row + 1, col + 1]);
  }
  // Check right
  if (right) {
    if (matrix[row][col + 1]) neighbors.push([row, col + 1]);
  }
  // Return neighbors
  return neighbors
}
//           col
//         0 1 2 3 4
//   r  0 [1,1,1,0,0]
//   o  1 [0,1,1,0,1]
//   w  2 [0,1,1,0,1]

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  const visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let currI = [row, col];
      // If an index contains a 1 and has not been visited,
      if (matrix[currI[0]][currI[1]] && !visited.has(currI.toString())) {
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        count++;
        // Initialize a stack with current index
        let stack = [currI];
        // Add stringified version of current index to the visited set
        visited.add(currI.toString());
        // While stack contains elements
        while (stack.length) {
          // Pop element from stack
          let currEl = stack.pop();
          // Get valid neighbors of current element
          let neighbors = getNeighbors(currEl[0], currEl[1], matrix);
          // Iterate over neigbors
          neighbors.forEach(neighbor => {
            // If neighbor has not been visited
            if (!visited.has(neighbor.toString())) {
              // Add neighbor to stack
              stack.push(neighbor);
              // Mark neighbor as visited
              visited.add(neighbor.toString());
            }
          });
        }
      }
    }
  }
  // Return island count
  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];

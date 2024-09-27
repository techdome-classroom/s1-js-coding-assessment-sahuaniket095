const getTotalIsles = function (grid) {


  // write your code here
  if (grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function to perform DFS
  function dfs(grid, r, c) {
    // Base case: if out of bounds or on water, return
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
      return;
    }

    // Mark the cell as visited by changing 'L' to 'W'
    grid[r][c] = 'W';

    // Explore all 4 direct
      // Explore all 4 directions (up, down, left, right)
      dfs(grid, r - 1, c); // up
      dfs(grid, r + 1, c); // down
      dfs(grid, r, c - 1); // left
      dfs(grid, r, c + 1); // right
    }
  
    // Iterate through each cell in the grid.
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 'L') {
          // Found a new island, perform DFS to mark all its land cells
          dfs(grid, r, c);
          islandCount++; // Increment island count
        }
      }
    }
  
    return islandCount;
  

};

module.exports = getTotalIsles;


// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (Array.isArray(matrix) && matrix.length) {
    let arr = []
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        matrix[i] = matrix[i];
      }
      else {
        matrix[i] = matrix[i].reverse();
      }
      arr[i] = matrix[i];
    }
    return arr.flat();
  }
  else {
    return [];
  }
}

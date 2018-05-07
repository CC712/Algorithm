/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  //rows
  let l = board.length;
  for (let i = 0; i < l; i++) {
    let set = new Set();
    for (let j = 0; j < l; j++) {
      let val = board[i][j];
      if (val == ".") continue;
      if (set.has(val)) return false;
      else set.add(val);
    }
  }
  //columns
  for (let i = 0; i < l; i++) {
    let set = new Set();
    for (let j = 0; j < l; j++) {
      let val = board[j][i];
      if (val == ".") continue;
      if (set.has(val)) return false;
      else set.add(val);
    }
  }
  // 3 * 3
  //sub matrix start point
  for (let i = 0; i < l; i += 3) {
    for (let j = 0; j < l; j += 3) {
      let set = new Set();
      for (let x = i; x < i + 3 && x < l; x++) {
        for (let y = j; y < j + 3 && y < l; y++) {
          let val = board[x][y];
          if (val == ".") continue;
          if (set.has(val)) return false;
          else set.add(val);
        }
      }
    }
  }
  return true;
};
let sudu = [
  ["1", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
// 有点暴力 是不是有更好的方法？

// 1 合并循环 注意到 全部都有两层循环包着
var isValidSudoku_v1 = function(board) {
  //rows & column
  let l = board.length;
  for (let i = 0; i < l; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    for (let j = 0; j < l; j++) {
      let rowVal = board[i][j];
      let colVal = board[j][i];

      if (rowVal != "." && rowSet.has(rowVal)) return false;
      if (colVal != "." && colSet.has(colVal)) return false;

      rowSet.add(rowVal);
      colSet.add(colVal);
    }
  }
  // 3 * 3
  //sub matrix start point
  for (let i = 0; i < l; i += 3) {
    for (let j = 0; j < l; j += 3) {
      let set = new Set();
      for (let x = i; x < i + 3 && x < l; x++) {
        for (let y = j; y < j + 3 && y < l; y++) {
          let val = board[x][y];
          if (val == ".") continue;
          if (set.has(val)) return false;
          else set.add(val);
        }
      }
    }
  }
  return true;
};
// 2 合并循环 去掉最大的四重循环
var isValidSudoku_v2 = function(board) {
  // make subMatrixs
  let subMatrixs = [];
  for (let i = 0; i < 3; i++) {
    subMatrixs.push(new Array(3));
  }

  //rows & column
  let l = board.length;
  for (let i = 0; i < l; i++) {
    let rowSet = new Set();
    let colSet = new Set();
    for (let j = 0; j < l; j++) {
      let rowVal = board[i][j];
      let colVal = board[j][i];

      if (rowVal != "." && rowSet.has(rowVal)) return false;
      if (colVal != "." && colSet.has(colVal)) return false;

      rowSet.add(rowVal);
      colSet.add(colVal);

      // 3 * 3
      // 映射 换算 submatrix 定位到不同的set
      // 012 345 678 -> 0 1 2
      let x = ~~(i / 3);
      let y = ~~(j / 3);
      if (subMatrixs[x][y] == undefined) {
        subMatrixs[x][y] = new Set();
      }
      let sm = subMatrixs[x][y];
      if (rowVal != "." && sm.has(rowVal)) { 
        return false;
      }
      sm.add(rowVal);
    }
  }
  return true;
};
console.time("origin");
console.log(isValidSudoku(sudu));
console.timeEnd("origin");
//比origin快了9倍。。
console.time("v1");
console.log(isValidSudoku_v1(sudu));
console.timeEnd("v1");
// 好像差不多。。。 除法的地方计算太多了
console.time("v2");
console.log(isValidSudoku_v2(sudu));
console.timeEnd("v2");

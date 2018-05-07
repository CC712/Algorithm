let matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];

function rotateMatrix(matrix) {
    let t = new Array(matrix.length).fill(0); // 有一个深拷贝的问题 多维数组 其实是引用类型，不是基本类型
    t = t.map((r, i) => [...matrix.slice(i, i + 1)[0]]);
    console.log(t);
    for(let i = 0, l = matrix.length ; i < l; i++){
        for(let j = 0; j < l ; j ++){
            let x = j, y = Math.abs(l - 1 - i);
            matrix[x][y]= t[i][j];
        }
    }
}
rotateMatrix(matrix);
console.log(matrix);
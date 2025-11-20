function solution(sizes) {
    let wh = sizes.map(([x, y]) => {
        return x < y ? [y, x] : [x, y];
    });
    const max0 = Math.max(...wh.map(row => row[0]));
    const max1 = Math.max(...wh.map(row => row[1]));
    return max0 * max1;
}
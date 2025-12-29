function solution(arr) {
    //1. 유클리드 호제법을 활용하여 배열 내 값들의 최소공배수 구하기
    //2. arr의 원소 순서대로 첫 2개의 최소공배수를 구한 후, 그 다음 수와의 최소공배수를 계속해서 구하기
    return arr.reduce((acc, cur) => {
        const gcd = (x, y) => {
            return (x % y === 0) ? y : gcd(y, x % y);
        }
        return acc * cur / gcd(acc, cur);
    })
}
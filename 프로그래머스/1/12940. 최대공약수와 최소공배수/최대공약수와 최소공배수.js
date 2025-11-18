function solution(n, m) {
    var answer = [];
    let a = Math.max(n, m);
    let b = Math.min(n, m);
    const gcd = (x, y) => {
        return x % y === 0 ? y : gcd(y, x%y);
    }
    let lcd = gcd(b, a);
    answer = [lcd, a * b /lcd];
    
    return answer;
}
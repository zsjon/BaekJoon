function solution(s, n) {
    let letter = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ';
    return s.split('').map((e)=>letter[letter.indexOf(e)+n]).join('');
}
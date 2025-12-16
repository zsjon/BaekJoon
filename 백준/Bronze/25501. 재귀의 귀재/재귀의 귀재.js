let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let answer = '';
function isPalindrome(s, cur, cnt){
    const length = Math.floor(s.length / 2);
    if(cur >= length){
        return answer += '1 ' + cnt + '\n';
    }
    else{
        if(s[cur] === s[s.length - cur - 1]){
            return isPalindrome(s, cur + 1, cnt + 1);
        }
        else{
            return answer += '0 ' + cnt + '\n';
        }
    }
}
input.forEach((e)=>{
    isPalindrome(e, 0, 1);
});
console.log(answer);
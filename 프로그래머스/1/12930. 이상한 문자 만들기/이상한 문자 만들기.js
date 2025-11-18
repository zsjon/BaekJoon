function solution(s) {
    var answer = s.toLowerCase().split(' ');
    for(let i = 0; i < answer.length; i ++){
        let word = answer[i].split('');
        for(let j = 0; j < word.length; j += 2){
            word[j] = word[j].toUpperCase();
        }
        answer[i] = word.join('');
    }
    return answer.join(' ');
}
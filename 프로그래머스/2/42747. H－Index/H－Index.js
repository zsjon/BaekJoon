function solution(citations) {
    let n = citations.length;
    citations = citations.sort((a, b) => b - a);
    for(let i = 0; i < citations.length; i++){
        if(citations[i] < i + 1){
            return i;
            break;
        }
    }
    return citations.length;
}
function solution(s){
    var answer = true;
    let pv = 0;
    let yv = 0;
    let par = s.toUpperCase();
    pv = par.match(/P/g)?.length;
    yv = par.match(/Y/g)?.length;

    if(pv !== yv){
        return false;
    }

    return answer;
}
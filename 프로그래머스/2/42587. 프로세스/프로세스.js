function solution(priorities, location) {
    var cnt = 0;
    let max = Math.max(...priorities);
    while(true){
        let current = priorities.shift();
        if(current === max){
            cnt++;
            if(location===0) return cnt;
            max = Math.max(...priorities);
        }
        else{
            priorities.push(current);
        }
        location = location === 0 ? priorities.length - 1 : location - 1;
    }
}
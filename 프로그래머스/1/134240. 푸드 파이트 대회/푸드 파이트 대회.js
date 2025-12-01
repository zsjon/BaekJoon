function solution(food) {
    var arr = [];
    for(let i = 1; i < food.length; i++){
        let n = Math.floor(food[i]/2);
        for(let j = 0; j < n; j++){
            arr.push(i);
        }
    }
    arr.push(0);
    for(let i = food.length - 1; i >= 1; i--){
        let n = Math.floor(food[i]/2);
        for(let j = 0; j < n; j++){
            arr.push(i);
        }
    }
    return arr.join('');
}
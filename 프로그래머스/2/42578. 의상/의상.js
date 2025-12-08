function solution(clothes) {
    var answer = 1;
    //1. 해시 테이블을 생성하여 종류별 개수 등록
    let tn = new Map();
    //2. 해시 테이블 내 각 객체마다 forEach로 의상종류 착용여부 확인
    clothes.forEach((item)=>{
        const [cloth, type] = item;
        if(!tn.has(type)){
            tn.set(type, 1);
        }
        else{
            tn.set(type, tn.get(type) + 1);
        }
    })
    
    for(let [key, value] of tn){
        answer *= (value + 1);
    }
    return answer - 1;
}
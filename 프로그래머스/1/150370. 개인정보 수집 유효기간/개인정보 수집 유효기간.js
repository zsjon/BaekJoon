function toDays(date){ //모든 날짜를 일수로 만들기 위한 함수
    let [y, m, d] = date.split('.').map(Number);
    return y * 12 * 28 + m * 28 + d;
}
function solution(today, terms, privacies) {
    var answer = [];
    let toDate = toDays(today);
    let term = {}; //각 term의 만료 month값을 저장할 객체
    terms.forEach(t => {
        let [type, month] = t.split(' ');
        term[type] = Number(month); //각 term의 type을 month로 저장
    });
    privacies.forEach((p, idx) => { //result 도출을 위한 idx 부여
        let [date, type] = p.split(' ');
        let exp = toDays(date) + term[type] * 28; //만료일을 일수로 변환 후 term 만료일을 추가
        if(exp <= toDate){ //today와 privacy 만료일 비교
            answer.push(idx + 1);
        }
    })
    return answer;
}
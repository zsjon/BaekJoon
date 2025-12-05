function solution(name) {
    var count = 0;
    let min = name.length - 1; //상하좌우 이동 최초 최소값
    //1. 그리디 풀이, name.length의 맨 앞에서 하나씩 만들어가는 구조
    //2. name[0]~name[name.length - 1]까지 순서대로 최소값을 구하며 더해가는 방식
    //3. 만약 name[i]의 charCodeAt 아스키코드가 가운데인 N보다 작으면 그 차이만큼 이동, N보다 크면 Z로 이동 후 역순으로 이동
    //4. 하나 완성 후, 커서 이동의 경우 좌우 중 효율적인 방향 선택
    //5. A를 건너뛰는 것이 효율적인지 선택
    for(let i = 0; i < name.length; i++){
        count += Math.min((name[i].charCodeAt(0) - 65), (91 - name[i].charCodeAt(0))); //위아래 버튼 여부 결정
        let nextA = i + 1; //A의 연속 개수를 고려한 좌우 이동 여부 결정
        while(nextA < name.length && name.charCodeAt(nextA) === 65) nextA++; //연속된 A 개수 찾기
        min = Math.min(min, (i * 2) + name.length - nextA, i + (name.length - nextA) * 2); // 그냥 좌로만 쭉 가는 거랑, 우로 한번 거쳐서 맨 뒤로 가는 거,  중에서 최소값 비교
    }
    return count + min;
}
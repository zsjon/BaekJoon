function solution(phone_book) {
    phone_book.sort(); // 우선 순서대로 정렬하기
    for(let i = 0; i < phone_book.length - 1; i++){ //2개씩 비교해야 하니까 -1 해주기
        if(phone_book[i+1].startsWith(phone_book[i])){ //인접한 것들끼리 접두어인지 비교
            return false;
        }
    }
    return true;
}
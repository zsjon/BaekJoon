function solution(nums) {
    let arr = [...new Set(nums)]; //Set()로 중복제거
    let max = nums.length / 2; //최대 N/2마리
    
    return arr.length > max ? max : arr.length; //max값보다 arr.length가 크면 안되므로
}
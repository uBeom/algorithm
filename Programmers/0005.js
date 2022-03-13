// 핸드폰 번호 가리기
function solution(phone_number) {
  return [...phone_number].fill('*', 0, phone_number.length-4).join('');
}

console.log(solution("027778888"));
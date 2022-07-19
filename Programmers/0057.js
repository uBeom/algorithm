// 스킬 체크 테스트 Level.1
function solution(phone_number) {
  let str = "";

  if (phone_number.length >= 5) {
    for (let i = 0; i <= phone_number.length - 5; i++) str += "*";

    for (let i = phone_number.length - 4; i < phone_number.length; i++)
      str += phone_number[i];
  } else return phone_number;

  return str;
}

console.log(solution("0102"));

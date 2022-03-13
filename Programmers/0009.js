// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
 const answer = strings.sort((a, b)=>{
  if(a[n] > b[n]) return 1;
  else if(a[n] < b[n]) return -1;
  else if(a[n] === b[n]) {
    if(a > b) return 1;
    else return -1;
  }
 });
  
  return answer;
}

console.log(solution(["sun", "bed", "car"],	1));
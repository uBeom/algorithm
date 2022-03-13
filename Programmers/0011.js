// 문자열 내림차순으로 배치하기
function solution(s){
  return [...s].sort((a, b)=>{
    if(a > b) return -1;
    else if(a === b) return 0;
    else return 1;
  }).join('');
}

console.log(solution("Zbcdefg"));
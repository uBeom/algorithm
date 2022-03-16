// 가운데 글자 가져오기
function solution(s) {
  const half = Math.floor(s.length/2);

  if(s.length%2) return s[half];
  else return s.slice(half-1, half+1);
}

console.log(solution("qwer"));
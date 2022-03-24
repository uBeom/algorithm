// 2016년
function solution(a, b) {
  const day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;

  for(let i=0; i<a; i++) sum += date[i];
  sum -= date[a-1] - b;

  let cnt = sum%7;
  return day[cnt];
}

console.log(solution(1, 1));
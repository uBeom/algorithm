// 2016년
function solution(a, b) {
  // let cnt = b-1;
  // const day = ["TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON"];
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;

  sum += b-1;
  for(let i=1; i<a; i++) {
    sum += date[i];
  }
  console.log(sum);
  let cnt = sum%7;
  console.log(cnt);
  return day[cnt];
}

console.log(solution(5, 24));
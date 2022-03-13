// 문자열 내 p와 y의 개수
function solution(s){
  const str = [...s.toLowerCase()];
  const map = new Map();
  
  str.forEach(e=>{
    if(map.has(e)) map.set(e, map.get(e)+1);
    else map.set(e, 1);
  });

  if(map.get('p') === map.get('y')) return true;
  else return false;
}

console.log(solution("Pyy"));
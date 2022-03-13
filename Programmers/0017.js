// 시저 암호
function solution(s, n) {
  let answer = '';
  const str = [...s.split('')];

  str.map(e=>{
    if(e < 'a') {
      if(e.charCodeAt(0)+n > 'z'.charCodeAt(0)) answer += String.fromCharCode(e.charCodeAt(0)+n);
      else answer += String.fromCharCode(e.charCodeAt(0)+n);
    }
    else if (e === ' ') answer += ' ';
    else {

    }
  });

  return answer;
}

console.log(solution("AB", 1));
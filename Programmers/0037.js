// 시저 암호
function solution(s, n) {
  return s.split('').map(e => {
    if(e === ' ') return ' ';

    if(e.charCodeAt()+n > 122 && e === e.toLowerCase()) {
      return String.fromCharCode('a'.charCodeAt() + n - (122 - e.charCodeAt()+1));
    } else if(e.charCodeAt()+n > 90 && e === e.toUpperCase()) {
      return String.fromCharCode('A'.charCodeAt() + n - (90 - e.charCodeAt()+1));
    } else {
      return String.fromCharCode(e.charCodeAt()+n);
    }
  }).join('');
}

 console.log(solution("a B z", 4));
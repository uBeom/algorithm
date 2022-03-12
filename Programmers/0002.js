// 올바른 괄호
function solution(s){
  const stack = [];

  for(let e of s) {
    if(e === '(') stack.push(e);
    if(e === ')') {
      if(!stack.length) return false;
      stack.pop();
    }
  }

  if(stack.length) return false;
  else return true;
}

console.log(solution('()()'));
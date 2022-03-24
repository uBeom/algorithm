// 숫자 문자열과 영단어
function solution(s) {
  const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
  numArr.forEach((e, i) => {
    if(s.includes(e)) s = s.replace(new RegExp(e, "g"), `${i}`);
  });

  return parseInt(s);
}

 console.log(solution("one4seveneight"));
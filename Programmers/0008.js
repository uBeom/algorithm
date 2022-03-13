// 직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    function solution(a, b) {
      for(let i=0; i<b; i++) {
        let answer = '';
        for(let j=0; j<a; j++) {
          answer += '*';
        }
        console.log(answer);
      }
    }

    solution(a, b);
});
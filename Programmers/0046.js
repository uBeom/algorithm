// 신고 결과 받기
function solution(id_list, report, k) {
  const user = Array.from({length: id_list.length}, ()=>0);
  
  newReport = Array.from(new Set(report));
  console.log(newReport)
  newReport.forEach(e => {
    const userReport = e.split(' ')[1];

    switch (userReport) {
      case 'muzi':
        user[0]++;
        break;
      case 'frodo':
        user[1]++;
        break;
      case 'apeach':
        user[2]++;
        break;
      case 'neo':
        user[3]++;
        break;
    }
  });

  console.log(user);
}

 console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2));
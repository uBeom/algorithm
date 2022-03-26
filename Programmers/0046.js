// 신고 결과 받기
function solution(id_list, report, k) {
  const users = [];
  const mails = Array.from({length : id_list.length}, ()=>0);

  for(let i=0, length=id_list.length; i<length; i++) {
    const map = new Map();
    users.push(map);
  }

  report.forEach(e=>{
    const declaration = e.split(' ');
    const idNum = id_list.indexOf(declaration[0]);
    users[idNum].set(declaration[1], 1);
  });

  const tempMap = new Map();
  users.forEach(userEl => {
    id_list.forEach(idListEl => {
      if(userEl.has(idListEl)) {
        if(tempMap.has(idListEl)) tempMap.set(idListEl, tempMap.get(idListEl)+1);
        else tempMap.set(idListEl, 1);
      }
    });
  });

  const declarationUser = [];
  tempMap.forEach((val, key) => {
    if(val >= k) declarationUser.push(key);
  });

  users.forEach((userEl, i) => {
    declarationUser.forEach(declarationEl=>{
      if(userEl.has(declarationEl)) mails[i]++;
    });
  });

  return mails;
}

 console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));
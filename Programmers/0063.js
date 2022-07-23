// 오픈채팅방
function solution(record) {
  const member = new Map();

  record.forEach((user) => {
    const [behavior, id, name] = user.split(" ");

    if (behavior !== "Leave") member.set(id, name);
  });

  const answer = record
    .filter((user) => {
      const [behavior] = user.split(" ");

      return behavior !== "Change";
    })
    .map((user) => {
      const [behavior, id] = user.split(" ");

      switch (behavior) {
        case "Enter":
          return `${member.get(id)}님이 들어왔습니다.`;
        case "Leave":
          return `${member.get(id)}님이 나갔습니다.`;
        default:
          return;
      }
    });

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);

// 베스트앨범
function solution(genres, plays) {
  const answer = [];
  const genresTotalPlays = new Map();

  genres.forEach((genre, index) => {
    if (genresTotalPlays.has(genre))
      genresTotalPlays.set(genre, genresTotalPlays.get(genre) + plays[index]);
    else genresTotalPlays.set(genre, plays[index]);
  });

  while (genresTotalPlays.size) {
    const max = {
      key: "",
      value: Number.MIN_SAFE_INTEGER,
    };

    genresTotalPlays.forEach((play, genre) => {
      if (play > max.value) {
        max.key = genre;
        max.value = play;
      }
    });

    genres
      .map((genre, index) => {
        if (genre === max.key) return { index, value: plays[index] };
      })
      .filter((genreInfo) => genreInfo)
      .sort((a, b) => b.value - a.value)
      .slice(0, 2)
      .forEach((genreInfo) => answer.push(genreInfo.index));

    genresTotalPlays.delete(max.key);
  }

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);

var fs = require("fs");
const { data } = require("../data/apidata.json");

// データのキー
const dataKeysDescription = {
  _id: "ID",
  films: "映画(配列)",
  shortFilms: "ショートフィルム(配列)",
  tvShows: "TV(配列)",
  videoGames: "ゲーム(配列)",
  parkAttractions: "パークアトラクション(配列)",
  allies: "味方(配列)",
  enemies: "敵(配列)",
  sourceUrl: "URL",
  name: "名前",
  imageUrl: "画像URL",
  createdAt: "作成日",
  updatedAt: "更新日",
  url: "キャラクター取得APIのURL",
  __v: "不明",
};
console.log("----APIレスポンスのカラム----");
console.log(dataKeysDescription);

// 新しく作成するテーブル(上記配列になっているものをテーブルとして切り出す)
const tablesDescription = {
  charactor: "キャラクター基本テーブル",
  film: "映画テーブル",
  shortFilm: "ショートフィルムテーブル",
  tvShow: "TVテーブル",
  videoGame: "ゲームテーブル",
  parkAttraction: "パークアトラクションテーブル",
  allies: "味方テーブル",
  enemies: "敵テーブル",
};
console.log("----作成データ----");
console.log(tablesDescription);

// キャラクター基本テーブルの作成
const charactor = data.map((row) => {
  return {
    id: row._id,
    sourceUrl: row.sourceUrl,
    name: row.name,
    imageUrl: row.imageUrl,
  };
});
fs.writeFileSync(
  __dirname + "\\..\\data\\charactor.json",
  JSON.stringify(charactor)
);

// 各テーブルの作成
const film = [];
const shortFilm = [];
const tvShow = [];
const videoGame = [];
const parkAttraction = [];
const allie = [];
const enemie = [];
data.forEach((row) => {
  row.films.forEach((innerrow) => {
    film.push({ id: row._id, name: innerrow });
  });
  row.shortFilms.forEach((innerrow) => {
    shortFilm.push({ id: row._id, name: innerrow });
  });
  row.tvShows.forEach((innerrow) => {
    tvShow.push({ id: row._id, name: innerrow });
  });
  row.videoGames.forEach((innerrow) => {
    videoGame.push({ id: row._id, name: innerrow });
  });
  row.parkAttractions.forEach((innerrow) => {
    parkAttraction.push({ id: row._id, name: innerrow });
  });
  row.allies.forEach((innerrow) => {
    allie.push({ id: row._id, name: innerrow });
  });
  row.enemies.forEach((innerrow) => {
    enemie.push({ id: row._id, name: innerrow });
  });
});
fs.writeFileSync(__dirname + "\\..\\data\\film.json", JSON.stringify(film));
fs.writeFileSync(
  __dirname + "\\..\\data\\shortFilm.json",
  JSON.stringify(shortFilm)
);
fs.writeFileSync(__dirname + "\\..\\data\\tvShow.json", JSON.stringify(tvShow));
fs.writeFileSync(
  __dirname + "\\..\\data\\videoGame.json",
  JSON.stringify(videoGame)
);
fs.writeFileSync(
  __dirname + "\\..\\data\\parkAttraction.json",
  JSON.stringify(parkAttraction)
);
fs.writeFileSync(__dirname + "\\..\\data\\allie.json", JSON.stringify(allie));
fs.writeFileSync(__dirname + "\\..\\data\\enemie.json", JSON.stringify(enemie));

console.log("----データ作成完了----");

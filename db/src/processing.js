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
    name: row.name,
    source_url: row.sourceUrl,
    image_url: row.imageUrl,
  };
});
fs.writeFileSync(
  __dirname + "\\..\\data\\charactor.json",
  JSON.stringify({ data: charactor }),
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
    film.push({ charactor_id: row._id, name: innerrow });
  });
  row.shortFilms.forEach((innerrow) => {
    shortFilm.push({ charactor_id: row._id, name: innerrow });
  });
  row.tvShows.forEach((innerrow) => {
    tvShow.push({ charactor_id: row._id, name: innerrow });
  });
  row.videoGames.forEach((innerrow) => {
    videoGame.push({ charactor_id: row._id, name: innerrow });
  });
  row.parkAttractions.forEach((innerrow) => {
    parkAttraction.push({ charactor_id: row._id, name: innerrow });
  });
  row.allies.forEach((innerrow) => {
    allie.push({ charactor_id: row._id, name: innerrow });
  });
  row.enemies.forEach((innerrow) => {
    enemie.push({ charactor_id: row._id, name: innerrow });
  });
});
fs.writeFileSync(
  __dirname + "\\..\\data\\film.json",
  JSON.stringify({ data: film }),
);
fs.writeFileSync(
  __dirname + "\\..\\data\\shortFilm.json",
  JSON.stringify({ data: shortFilm }),
);
fs.writeFileSync(
  __dirname + "\\..\\data\\tvShow.json",
  JSON.stringify({ data: tvShow }),
);
fs.writeFileSync(
  __dirname + "\\..\\data\\videoGame.json",
  JSON.stringify({ data: videoGame }),
);
fs.writeFileSync(
  __dirname + "\\..\\data\\parkAttraction.json",
  JSON.stringify({ data: parkAttraction }),
);
fs.writeFileSync(
  __dirname + "\\..\\data\\allie.json",
  JSON.stringify({ data: allie }),
);
fs.writeFileSync(
  __dirname + "\\..\\data\\enemie.json",
  JSON.stringify({ data: enemie }),
);

console.log("----データ作成完了----");

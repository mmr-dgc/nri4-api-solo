![GitHub repo size](https://img.shields.io/github/repo-size/mmr-dgc/nri4-api-solo)

# nri4-api-solo

## 事前準備

以下のコマンドでDBを起動する。

```
docker-compose up -d
```

以下コマンドでDBに接続する。

```
docker exec -it nri4-api-solo-db-1 /bin/sh
psql -h localhost -U root
CREATE DATABASE sample;
\c sample;
```

## API仕様

### 1. 取得

#### 1.1. 全件取得

- メソッド

```
GET
```

- パス

```
/api/charactors
```

- パスパラメータ

```
なし
```

- クエリパラメータ

```
limit={取得数}
```

- リクエストボディ

```
なし
```

- レスポンスボディ

```
[
  {
    id: 112,
    films: ["Hercules (film)"],
    shortFilms: [],
    tvShows: ["Hercules (TV series)"],
    videoGames: ["Kingdom Hearts III"],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
    name: "Achilles",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
  }
]
```

#### 1.2. ID指定取得

- メソッド

```
GET
```

- パス

```
/api/charactors/:id
```

- パスパラメータ

```
id={キャラクターID}
```

- クエリパラメータ

```
なし
```

- リクエストボディ

```
なし
```

- レスポンスボディ

```
[
  {
    id: 112,
    films: ["Hercules (film)"],
    shortFilms: [],
    tvShows: ["Hercules (TV series)"],
    videoGames: ["Kingdom Hearts III"],
    parkAttractions: [],
    allies: [],
    enemies: [],
    sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
    name: "Achilles",
    imageUrl:
          "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
  }
]
```

### 作成

- メソッド

```
POST
```

- パス

```
/api/charactors
```

- パスパラメータ

```
なし
```

- クエリパラメータ

```
なし
```

- リクエストボディ

```
{
  id: 99999,
  films: ["Hercules (film)"],
  shortFilms: [],
  tvShows: ["Hercules (TV series)"],
  videoGames: ["Kingdom Hearts III"],
  parkAttractions: [],
  allies: [],
  enemies: [],
  sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
  name: "Achilles",
  imageUrl:
    "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
}
```

- レスポンスボディ

```
なし
```

### 削除

- メソッド

```
DELETE
```

- パス

```
/api/charactors/:id
```

- パスパラメータ

```
id={キャラクターID}
```

- クエリパラメータ

```
なし
```

- リクエストボディ

```
なし
```

- レスポンスボディ

```
なし
```

### 更新

- メソッド

```
PATCH
```

- パス

```
/api/charactors
```

- パスパラメータ

```
なし
```

- クエリパラメータ

```
なし
```

- リクエストボディ

```
{
  id: 99999, // 必須
  sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
  name: "Achilles",
  imageUrl:
    "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
}
```

- レスポンスボディ

```
なし
```

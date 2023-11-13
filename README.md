# nri4-api-solo

## 事前準備

以下のコマンドでDBを起動する。

```
docker-compose up -d
```

以下コマンドでDBに接続し初期化を行う。

```
docker exec -it nri4-api-solo-db-1 /bin/sh
psql -h localhost -U root
CREATE DATABASE sample;
\c sample;
```

## API仕様

### 1. 取得

#### 1.1. 全件取得

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

### 更新

### 削除

### 作成

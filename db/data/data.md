# 利用データについて

## データの取得元

本プロジェクトで利用するデータは下記から取得。

- [Disney API](https://disneyapi.dev/)の[キャラクター情報取得API](https://api.disneyapi.dev/character)を利用。
- 取得データは7438件(https://api.disneyapi.dev/character?pageSize=7438)

上記APIのレスポンスデータの内容を[db/data/apidata.json](./apidata.json)に記載。

## データの加工

[apidata.json](./apidata.json)を[db/src/processing.js](../src/processing.js)で加工し、以下のDB用のデータを作成。

| #   | ファイル            | 説明                               |
| :-- | :------------------ | :--------------------------------- |
| 1   | allie.json          | キャラクターの味方                 |
| 2   | charactor.json      | キャラクター基本情報               |
| 3   | enemie.json         | キャラクターの敵                   |
| 4   | film.json           | キャラクターの登場映画             |
| 5   | parkAttraction.json | キャラクターのパークアトラクション |
| 6   | shortFilm.json      | キャラクターの登場ショートフィルム |
| 7   | tvShow.json         | キャラクターの登場TV               |
| 8   | videoGame.json      | キャラクターの登場ゲーム           |

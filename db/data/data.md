# 利用データについて

## データの取得元

本プロジェクトで利用するデータは下記から取得。

- [Disney API](https://disneyapi.dev/)の[キャラクター情報取得API](https://api.disneyapi.dev/character)を利用。

上記APIのレスポンスデータのdataの内容を[db/data/apidata.json](./apidata.json)に記載。

## データの加工

[apidata.json](./apidata.json)を[db/src/processing.js](../src/processing.js)で加工し、以下のDB用のデータを作成。

- hogehoge
- hogehoge
- hogehoge

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

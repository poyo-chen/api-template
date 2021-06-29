# API Sample for Cloud Run

本為 template repo
請用 github 上的 `Use this template` 按鈕來複製使用

#### 本機測試

```
npm i
npm run serve
```

#### 上傳 image

- 修改 package.json 內的
  `name` `version` `description` `config.image`
- build image + submit

```
npm run build
```

#### 部署 Cloud Run

```
npm run deploy
```

---

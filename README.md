# webhook-listener

GitHub webhook so'rovlarini qabul qiluvchi Netlify Edge Function (Deno).

## Endpoint

`POST /api/webhooks/github`

- `x-api-key` header `WEBHOOK_API_KEY` env qiymatiga teng bo'lishi kerak, aks holda `401`.
- Hozircha request body logga chiqariladi.

## Sozlash

```sh
cp .env.example .env   # WEBHOOK_API_KEY ni o'zgartiring
```

Netlify'da: **Site settings → Environment variables** ga `WEBHOOK_API_KEY` qo'shing.

## Lokal ishga tushirish

```sh
npm i -g netlify-cli
netlify dev
```

```sh
curl -X POST http://localhost:8888/api/webhooks/github \
  -H "x-api-key: change-me" \
  -H "content-type: application/json" \
  -d '{"hello":"world"}'
```

## Deploy

```sh
netlify deploy --prod
```

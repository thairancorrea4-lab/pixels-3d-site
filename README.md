# Pixel's 3D - Site

Landing page pronta para a Pixel's 3D, feita em React + Vite.

## Como rodar no computador

1. Instale o Node.js.
2. Abra o terminal dentro desta pasta.
3. Rode:

```bash
npm install
npm run dev
```

## Antes de publicar

Abra o arquivo:

```text
src/App.jsx
```

Troque o número do WhatsApp nesta linha:

```js
const WHATSAPP_NUMBER = '5547999999999';
```

Use o código do Brasil + DDD + número. Exemplo:

```js
const WHATSAPP_NUMBER = '5547991234567';
```

## Como publicar na Vercel

1. Crie uma conta em https://vercel.com
2. Crie uma conta em https://github.com, caso ainda não tenha.
3. Crie um repositório no GitHub chamado `pixels-3d-site`.
4. Envie esta pasta para o GitHub.
5. Na Vercel, clique em `Add New Project`.
6. Selecione o repositório `pixels-3d-site`.
7. Clique em `Deploy`.

A Vercel vai gerar um link parecido com:

```text
pixels-3d-site.vercel.app
```

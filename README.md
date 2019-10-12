# express-www-redirect

A pair of Express JS middlewares for redirecting:

- No-WWW hosts to WWW hosts
- WWW hosts to No-WWW hosts

This package has no opinion about whether you should use a WWW or No-WWW host, but that you should choose one or the other. A website that exists at both WWW and No-WWW hosts can cause confusion for search engines.

We use this package at [Simplycoupons.co](https://www.simplycoupons.co) to redirect all of our No-WWW requests to our WWW subdomain.

## Install

```
npm install express-www-redirect
```

## Redirecting No-WWW to WWW

Require `redirectNoWWWToWWW`:

```js
const { redirectNoWWWToWWW } = require('express-www-redirect')
```

Apply the middleware before your routes:

```js
app.use(redirectNoWWWToWWW(whitelistHosts, redirectStatusCode))
```

## Redirecting WWW to No-WWW

Require `redirectWWWToNoWWW`:

```js
const { redirectWWWToNoWWW } = require('express-www-redirect')
```

Apply the middleware before your routes:

```js
app.use(redirectWWWToNoWWW(whitelistHosts, redirectStatusCode))
```

## Configuration

- *whitelistHosts*: An array of strings of whitelisted hosts that will not be redirected. Include port numbers for `localhost`, example: `['localhost:3000']`. Default: `[]`.
- *redirect*: HTTP status code to apply to the redirect. Default: `301`.

## Example Express server - No-WWW to WWW

```js
var express = require('express');
const { redirectNoWWWToWWW } = require('express-www-redirect')
var app = express();

app.use(redirectWWWToNoWWW(['localhost:3000']))

app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

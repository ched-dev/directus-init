# Context usage in Operations

Operation `context` is mostly the same as the [hooks context](../hooks/context.md). Please refer there for the majority of properties. We will only document what is exclusive to operations in this file.

## Flow & Step Data: `context.data`

With `context.data` you can tap in to all of the prior operations results. This allows you to use data from another operation or special values such as `$trigger` or `$last`.

The following is an example from a flow with a webhook trigger:

```js
{
  '$trigger': {
    path: '/trigger/7e4d086e-4414-4385-beaf-5fb417d89806',
    query: {},
    body: { email: 'test@gmail.com' },
    method: 'POST',
    headers: {
      host: 'localhost:8055',
      connection: 'keep-alive',
      'content-length': '37',
      'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
      'sec-ch-ua-platform': '"macOS"',
      'sec-ch-ua-mobile': '?0',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
      'content-type': 'application/json',
      accept: '*/*',
      origin: 'http://localhost:3000',
      'sec-fetch-site': 'same-site',
      'sec-fetch-mode': 'cors',
      'sec-fetch-dest': 'empty',
      referer: 'http://localhost:3000/',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9'
    }
  },
  '$last': ...,
  '$accountability': {
    user: null,
    role: null,
    admin: false,
    app: false,
    ip: '::1',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
    origin: 'http://localhost:3000',
    permissions: []
  },
  '$env': {},
  // result of a "Read Data" step, key name matches your "step key"
  item_read_5u3da: [
    ...
  ],
```
# demo-data

Recorded `/api/reports/*` responses for the static demo build
(`npm run build:demo` → `dist-demo`, served from GitHub Pages at
`/reports/`). Read by `src/demo/demoAdapter.js` — see that file for the
resolution/fallback rules.

## TODO

`records.json` currently holds a **2-record fixture** so the build and the
resolver can be smoke-tested. **It will be overwritten** by the real recorded
snapshot — do not hand-maintain its contents.

## records.json format

A JSON array of records:

```json
[
  {
    "key": "/api/reports/statement?cadence=monthly&clientId=10019&statement=pnl",
    "path": "/api/reports/statement",
    "params": { "clientId": "10019", "statement": "pnl", "cadence": "monthly" },
    "body": "{\"statement\":\"pnl\", ...}"
  }
]
```

- `path` — request path without `baseURL`, leading slash included
  (`/api/reports/at-a-glance`, `/api/reports/statement`,
  `/api/reports/line-drill`, `/api/reports/aging`).
- `params` — flat object of query params **including `clientId`**. Values may
  be strings or numbers (they are stringified on both sides).
- `key` — `` `${path}?${qs}` `` where `qs` is `URLSearchParams.toString()` over
  the params **sorted alphabetically by name**, with `undefined` / `null` /
  `''` values dropped, and array values expanded into repeated pairs.
  `key` is optional: the loader recomputes it from `path` + `params` when
  missing (and the recomputed form is the canonical one).
- `body` — the response body as a **JSON string** (not a nested object).

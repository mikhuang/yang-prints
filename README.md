# YangPrints.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/cf6666f4-3ace-4d7d-8a7a-764804a44bf9/deploy-status)](https://app.netlify.com/sites/gallant-yonath-c7341f/deploys) deploys to https://gallant-yonath-c7341f.netlify.com and https://yangprints.com

Design doc https://docs.google.com/document/d/1jCGLqFaIzJGq8D6josI9v5f0oG3R0w5stiPzg_f6PsE/edit

## "Database" "import"

1. Go to https://docs.google.com/spreadsheets/d/1IzxvWSg6jifUGh7bZi_jhvEU1Bf_1XwE6pmLLuHuWa4/edit?usp=sharing
2. Export `Materials` sheet as CSV. Save to `data/materials.csv` for sanity.
3. Run `yarn run convert-csv`. Alternatively, use a [CSV to JSON tool](https://www.csvjson.com/csv2json) to convert and save to `data/materials.json`

## Deploy

Continuous Integration with Netlify. Netlify also provides DNS.

## Email

ImprovMX is used.

## Technical Maintainers

- m@mikhuang.com - Michael Huang

## Downloading Google Drive files

Use gdown and make sure the URLs look like the following:

```bash
pip install gdown
gdown https://drive.google.com/uc?id=1fLZoE-9cpQ0Bkm9ozhgK7Y3H6KX-CUtc
```

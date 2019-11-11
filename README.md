# YangPrints.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/cf6666f4-3ace-4d7d-8a7a-764804a44bf9/deploy-status)](https://app.netlify.com/sites/gallant-yonath-c7341f/deploys) deploys to https://gallant-yonath-c7341f.netlify.com and https://yangprints.com

Design doc https://docs.google.com/document/d/1jCGLqFaIzJGq8D6josI9v5f0oG3R0w5stiPzg_f6PsE/edit

## "Database" "import"

1. Go to https://docs.google.com/spreadsheets/d/1IzxvWSg6jifUGh7bZi_jhvEU1Bf_1XwE6pmLLuHuWa4/edit?usp=sharing
2. Export `Materials` sheet as CSV. Save to `data/materials.csv` for sanity.
3. Run `yarn run convert-csv`. Alternatively, use a [CSV to JSON tool](https://www.csvjson.com/csv2json) to convert and save to `data/materials.json`

## Material column fields and how they show up

- The pink "Download" link is created from the `${path}/${filename}` (written as es6 Template string notation)
- The thumbnail naively takes the `filename`, splits off the extension, and expects to find an identically named JPG in `${thumb}/${filename_without_ext}.jpg`
- The blue Source button (like on /bcard/1106-1000question-bcard) comes from the `src_path` column. It'll either be a full URL to wherever or a relative to site root if the file is also hosted on YangPrints.
- The Buy From Creator button (like on /button/yang-rainbow) comes from the `buy_url` column
- The `By @NAME_HERE` attribution combines the `creator` column and the `original_url` column

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

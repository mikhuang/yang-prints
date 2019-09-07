# Yang Prints

[![Netlify Status](https://api.netlify.com/api/v1/badges/cf6666f4-3ace-4d7d-8a7a-764804a44bf9/deploy-status)](https://app.netlify.com/sites/gallant-yonath-c7341f/deploys)

Design doc https://docs.google.com/document/d/1jCGLqFaIzJGq8D6josI9v5f0oG3R0w5stiPzg_f6PsE/edit

## "Database" "import"

1. Go to https://docs.google.com/spreadsheets/d/1IzxvWSg6jifUGh7bZi_jhvEU1Bf_1XwE6pmLLuHuWa4/edit?usp=sharing
2. Export `Materials` sheet as CSV. Save to `data/materials.csv` for sanity. TODO: consider using papaparse or directly accessing Google Spreadsheet to avoid additional steps.
3. Use a [CSV to JSON tool](https://www.csvjson.com/csv2json) to convert and save to `data/materials.json`

## Deploy

Continuous Integration with Netlify.

## Maintainers

- m@mikhuang.com - Michael Huang

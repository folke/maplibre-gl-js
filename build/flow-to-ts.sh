#!/bin/sh

die() {
  echo "[error] $0" 1>&2
  exit 1
}

echo "Running flowts"
npx flowts --no-allow-js --no-prettier src || die "could not migrate src"

echo "Running eslint --fix"
yarn maplibre:lint:fix

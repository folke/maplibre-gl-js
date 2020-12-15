#!/bin/sh

die() {
  echo "[error] $0" 1>&2
  exit 1
}

echo "Running flowts"
npx flowts --no-allow-js --no-prettier src || die "could not migrate src"

echo "Fixing some module types"
cp -riv ts-typed/* src/types/

echo "Running eslint --fix"
yarn maplibre:lint:fix

#!/bin/sh

die() {
  echo "[error] $0" 1>&2
  exit 1
}

npx flowts --no-allow-js --no-prettier src || die "could not migrate src"
npx flowts --no-allow-js --no-prettier flow-typed || die "could not migrate flow-typed"

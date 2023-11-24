#!/usr/bin/env bash

echo building all projects


echo building next

yarn build


echo building react

cd manager

yarn build

cd ..


echo merging

rm -rf build

cp -r manager/build build

cp -r out build/auth

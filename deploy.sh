#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist/

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git checkout main
git add .
now=`date`
git commit -m "deploy on '$(date)'"

# if you are deploying to https://<USERNAME>.github.io
git push -f origin main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:https://github.com/LaisGalvao/LaisGalvao.github.io.git master:master
#git push -f git@github.com:LaisGalvao/LaisGalvao.github.io.git master:master

cd -

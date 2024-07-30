
# Infomation

## login user
username   admin        
pwd        admin

>cookie time :180 days

## github pages
if use [gh-pages](https://github.com/tschaub/gh-pages) please use defualt command npm run deploy ,Special note i have made modifications in this what i change it to npm run github
```sh
npm run github
```
else not use gh-pages,please push code dist to branch gh-pages(your public github pages branch name)
```sh
git subtree push --prefix dist origin gh-pages 
```

## vue

This template should help get you started developing with Vue 3 in Vite.

if you cloud't see anything in /<branch-name>/<other> github page 
you need create a 404.html file in /public
because github page no support SPA 


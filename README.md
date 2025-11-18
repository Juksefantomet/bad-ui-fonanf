# install

```
npm install bad-ui-fonanf
```


# deploy

```
npm run build
```

# create a local tarball

```
npm pack
```
# Install local build

```
npm install ../bad-ui-fonanf/bad-ui-fonanf-0.0.1.tgz
```


# deploy to npmjs
```
npm login --registry=https://registry.npmjs.org/

npm publish --access public --registry=https://registry.npmjs.org/
```

# deploy existing and bump version to npmjs
```
npm version patch   # 0.0.1 -> 0.0.2
npm version minor   # 0.0.1 -> 0.1.0
npm version major   # 0.0.0 -> 1.0.0

npm publish --access public --registry=https://registry.npmjs.org/
```
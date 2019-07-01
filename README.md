# Notes

---

## Installing Prettier

- npm install -D prettier
- npx prettier App.js
- npx prettier App.js --write
- install extension to prettier in text editor
- write a .prettierrc file ({}) means default settings

## Installing ESLint

- `npm install -D eslint eslint-config-prettier`
- write a .eslintrc.json file
- ```
{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```
- needs something in text editior to use linting

## gitignore

- ```
.DS_Store
node_modules/
.cache/
dist/
coverage/
.env
package-lock.json
```
- pretty basic git ignore

## Parcel

- `npm install -D parcel-bundler`
- really smart, point it to index.html and it figures everything out
-

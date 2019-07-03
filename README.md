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
- configurations for react
- `npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`
```
{
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin: jsx-a11y/recommended"
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/prop-types": 0,
    "no-console": 1,
  },
  "plugins": ["react", "import", "jsx-a11y"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}

```
- needs something in text editior to use linting
- control + option + e
- sublimelinter-eslint


## gitignore

```
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
- in package.json we have script that looks like `parcel src/index.html`

## Hooks
- Two Way Binding
- Example hook
- `const [location, setLocation] = useState("Seattle, WA");`
- first argument is the state, second is the updater function (can be named anything) to update the state
- default state is Seattle, Washington else call that function and get new location
- all hooks begin with `use<somethingElse>`
- hooks NEVER go in if statements or loops (there's an eslint rule for this)
- `npm install -D eslint-plugin-react-hooks`
- add these two rules
```
"react-hooks/rules-of-hooks": 2,
"react-hooks/exhaustive-deps": 1
```
- add this plugin, `"react-hooks"`







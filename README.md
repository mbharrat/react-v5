# Notes

---

## Syntax
---
Use the following key combination to pull up the command palette:
`Ctrl + Shift + p`

then type:
`ssjsx`

---

## Installing Prettier
---
- npm install -D prettier
- npx prettier App.js
- npx prettier App.js --write
- install extension to prettier in text editor
- write a .prettierrc file ({}) means default settings

---

## Installing ESLint
---
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
---

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
- ---
## Parcel
---
- `npm install -D parcel-bundler`
- really smart, point it to index.html and it figures everything out
- in package.json we have script that looks like `parcel src/index.html`

## Hooks
---
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

#### useEffect (part of hooks)

- this does not happen on first render (runs after the dom is created and shown to user)
- takes place of componentWillMount, componentDidMount, componentDidUpdate
- this happens so something happens and user sees something
- with useEffect you need to declare dependencies
```
useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  }, [animal, setBreeds, setBreed]);
```
***Note the array at the end, these are the dependenacies which means, if any of these change THEN you can rerender (this prevents infinite rerenders)***

 To make it run when it mounts and never again
```
useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  }, []);
```
***Note you give it empty array of dep.***

To run every time theres an update
```
useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  });
```
***Note you don't pass any array***

---

## Dev Tools
---
- make sure NODE_ENV=development
- parcel takes care of it for you, but for in general
- React.StrictMode
```
return (
      <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
      </div>
      </React.StrictMode>
    );
  }
```
- React developer tools for chrome/firefox/whatever browser
- $r is whatever is selected in react dev tools

---

## Async and Routing
---
### Async
Example async function
```
async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }
```
- When using a form include in the onSubmit event handler `onSubmit={e => {
          e.preventDefault();
        }}`
Add this in package.json for list of supported browsers (defualt is all), and very modern browsers support async await
```
"browserslist": [
    "last 2 Chrome versions",
    "last 2 ChromeAndroid versions",
    "last 2 Firefox versions",
    "last 2 FirefoxAndroid versions",
    "last 2 Safari versions",
    "last 2 iOS versions",
    "last 2 Edge versions",
    "last 2 Opera versions",
    "last 2 OperaMobile versions"
  ]
```
- data flows down but not up (one-way data flow), the parent can effect the child but the child can not effect the parent



### Router
- react router and reach router (very accessibility focused)
- `npm install -D @reach/router`
- import statement `import { Router, Link } from "@reach/router";`

**example of how format looks**
```
<Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
</Router>
```

**Example of how Link works (this makes the Adopt Me header link back to /)**
```
<header>
          <Link to="/">Adopt Me!</Link>
 </header>
```

**Cool way to see props of router**
```
const Details = props => {
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};
```
---

## Class Components
- `componentDidMount()` runs when it first start up but no more

Need to do this so class component can use props, hands props to React.Component to use
```
constructor(props) {
    super(props);
  }
```
`npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`
- this is to not use constructor like this
```
constructor(props) {
    super(props);

    this.state = { loading: true };
  }
```

and use it like this
```
state = {loading: true}
```
- create `.babelrc`
```
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```
- presets-react : brings in all things react needs (transpilation around jsx)
- preset-env : transpile code for environment you specify (looking at browsers)
  - can import google analytics
- plugins: allows us to do above syntax
- in `.eslintrc.json`
- add `"parser": "babel-eslint"`
- no hooks
- this.props is immutable (can not change)
```
static getDerivedStateFromProps({ media }){}
```
- when passing functions into children or event listeners, use an arrow function









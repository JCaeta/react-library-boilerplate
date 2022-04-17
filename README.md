# react-library-boilerplate
For more details: https://github.com/michal-wrzosek/react-component-lib

## Installation:

```
npm i
```

It will install:
- `dependencies` and `devDependencies` from ./package.json

`npm run storybook` for testing

## Developing your library:
- Add your new component into the src/components folder
- Files must be .tsx
![image](https://user-images.githubusercontent.com/63880187/163710656-17d5b00c-6c05-4247-94b5-bdfa95068b24.png)

## Publishing your library
### Setup .npmrc file
- We need to configure the .npmrc file into our C:\Users\User folder (in Windows)
- That file cannot be in our project folder
- Create a file if not exists or replace it with the following code:
```
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```

### How to get your authorization token?
![image](https://user-images.githubusercontent.com/63880187/163711023-7e77a5c2-f003-4de7-ae7a-5fd202ec1789.png)

### Publish
- Once we have our repository uploaded on GitHub use `npm publish`
- Maybe you will need to log in to npm with `npm login`

### Import our library
`import { TestComponent } from '@GITHUB_USERNAME/REPOSITORY_NAME';`



# SETUP

```
npm install -g lerna
lerna init --independent
```

## Create packages
```
lerna create restaurant-dashboard
lerna create deliver-eats
lerna create drivers
lerna create utilities
```

## Add frameworks to packages
```
npx create-next-app delivery-eats --use-npm --example "https://github.com/vercel/next-learn/tree/main/basics/basics-final"
npm init svelte restaurant-dashboard
```

## Add packages to package.json file

## Add files
create:
- .gitignore
- .eslintignore
- .prettierignore
- commitlint.config.js
- jest.config.js
- add rules to .prettierrc (see file)
- .eslintrc

## Commands to build and setup
```
npm run bootstrap
npm run clean
```

### extra
I use `ncu -u` and `syncpack fix-mismatches` when working with old tutorials


### Add SvelteKit
`npm create svelte@latest delivery-eats-admin

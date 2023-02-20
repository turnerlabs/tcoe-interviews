# UI Challenges

In these challenges, your task is to test a website for proper UI functionality

Please build upon the provided UI framework. Feel free to make a WDIO config file.

Baseurl -  
http://uitestingplayground.com/  
or  
https://www.cnn.com/

## Exercises

- [Exercise 1](./exercise-1.md)
- [Exercise 2](./exercise-2.md)
- [Exercise 3](./exercise-3.md)

# Get Started
To properly setup babel (To  use new js features), run
```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
```
Make sure to update the node version in the babel.config.js
To properly setup eslint for wdio, run 
```bash
npm i eslint --save-dev
npm install eslint-plugin-wdio --save-dev
```

# Important!
Be sure to update your chromedriver version in the package.json and run **npm install**.

To run the suite, run 
```bash
npm run --suite cnn
```
To run an specific test, paste the relative path in the specs field in wdio.config.json and run
```bash
npx wdio
```

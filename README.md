# Webpack 

[2020-07-31]

## Getting Started

* https://webpack.js.org/guides/getting-started/
* webpack is used to compile JavaScript modules.
* webpack-cli is used to run webpack on the command line
* webpack transpiles modern js (import/export) code for backward compatibility.

### Basic Setup

* Create a project directory.
* Install `webpack` and `webpack-cli`

``` shell
mkdir hello-webpack
cd hello-webpack
npm init -y
npm install webpack webpack-cli --save-dev
```

### Normal Application

#### src/index.js

``` js
// below code require `Lodash`  `_` to function
// currently this code make assumption that `_` will be available as global variable
// this assumptions is error-prone.
function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
```

#### index.html

``` html
<!doctype html>
<html>

<head>
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
</head>

<body>
    <script src="./src/index.js"></script>
</body>

</html>
```

#### package.json

``` json
  {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "private": true,
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.20.2",
      "webpack-cli": "^3.1.2"
    },
    "dependencies": {}
  }
```

### Creating a Bundle

* to bundle `lodash` with `index.js` , `npm install --save lodash`
* for production bundle use, `npm install --save <package>`
* for development use, `npm install --save-dev <package>`
* webpack prepare dependency graph from explicit import statement
  + further it optimize the bundle.
* `npx` command is ships with `Node 8.2/npm 5.2.0 or higher` .
  + it runs the webpack binary `./node_modules/.bin/webpack`

#### install dependency

``` shell
npm install --save lodash
```

#### src/index.js

``` js
import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
```

#### dist/index.html (moved from previous location)

``` html
  <!doctype html>
  <html>

  <head>
      <title>Getting Started</title>
  </head>

  <body>
      <script src="main.js"></script>
  </body>

  </html>
```

#### build the project using `npx webpack` to generate `main.js`

``` shell
npx webpack

...
Built at: 13/06/2018 11:52:07
  Asset      Size  Chunks             Chunk Names
main.js  70.4 KiB       0  [emitted]  main
...

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

#### run the `dist/index.html`

* run the `dist/index.html`

### Using Configuration

* complex setup use configuration file then cli may be tedious to work with
* loaded rules
* plugins
* resolve options

#### webpack.config.js

``` js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```

#### build the project using `npx webpack` or `npx webpack --config webpack.config.js` to generate `main.js`

``` shell
npx webpack --config webpack.config.js

...
  Asset      Size  Chunks             Chunk Names
main.js  70.4 KiB       0  [emitted]  main
...

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
If a webpack.config.js is present, the webpack command picks it up by default. We use
```

### NPM Script

#### package.json

``` js
  {
      "name": "webpack-demo",
      "version": "1.0.0",
      "description": "",
      "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "build": "webpack"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
          "webpack": "^4.20.2",
          "webpack-cli": "^3.1.2"
      },
      "dependencies": {
          "lodash": "^4.17.5"
      }
  }
```

#### build the project using `npm run build` to generate `main.js`

* Custom parameters can be passed to webpack by adding two dashes between the `npm run build` command and your parameters, e.g. `npm run build -- --colors` .

``` shell
npm run build

...
  Asset      Size  Chunks             Chunk Names
main.js  70.4 KiB       0  [emitted]  main
...

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/.

```

### Command Output

``` shell
mario:nodejs-webpack-tutorial arunsah$ node -v
v14.3.0
mario:nodejs-webpack-tutorial arunsah$ npm -v
6.14.5

mario:hello-webpack arunsah$ ls
node_modules            package-lock.json       package.json
mario:hello-webpack arunsah$ npm install --save lodash

* lodash@4.17.19

added 1 package from 2 contributors and audited 397 packages in 12.293s

6 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

mario:hello-webpack arunsah$ npx webpack
Hash: f4aca8ef73a0632cef31
Version: webpack 4.44.1
Time: 1324ms
Built at: 31/07/2020 18:48:47
  Asset      Size  Chunks             Chunk Names
main.js  72.3 KiB       0  [emitted]  main
Entrypoint main = main.js
[1] ./src/index.js 373 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]

    - 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
mario:hello-webpack arunsah$ npx webpack --config webpack.config.js 
Hash: 7f1011bc4a13c2fc6888
Version: webpack 4.44.1
Time: 1330ms
Built at: 31/07/2020 18:58:32
  Asset      Size  Chunks             Chunk Names
main.js  72.3 KiB       0  [emitted]  main
Entrypoint main = main.js
[1] ./src/index.js 377 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]

    - 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
mario:hello-webpack arunsah$ 

mario:hello-webpack arunsah$ 
mario:hello-webpack arunsah$ npm run build

> hello-webpack@1.0.0 build /Users/arunsah/dev/tut/webpack/hello-webpack
> webpack

Hash: 7f1011bc4a13c2fc6888
Version: webpack 4.44.1
Time: 205ms
Built at: 31/07/2020 19:01:54
  Asset      Size  Chunks             Chunk Names
main.js  72.3 KiB       0  [emitted]  main
Entrypoint main = main.js
[1] ./src/index.js 377 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]

    - 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
mario:hello-webpack arunsah$ 
```

## Vue-Notification

### Dependencies

```shell
npm install --save vue-notification
```
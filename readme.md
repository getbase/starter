# [Base Starter](http://getbase.org)

### A Rock Solid, Starter template that includes the base CSS framework and other goodies.

Start your web / app projects right away. Spend less time with setup and focus more time on writing beautiful styles.

* * *

## Table of contents

* [Overview](#overview)
* [Installation](#installation)
* [Documentation](#documentation)
* [Support](#support)
* [Authors](#authors)
* [License](#license)

* * *

## Overview

Base starter includes a basic index.html template, along with favicons and basic styles.

* * *

## Installation

Getting started is easy, simply clone the repo and run the project

```bash
git clone https://github.com/matthewhartman/base-starter.git your-website \
&& cd your-website && rm -rf .git && npm i && npm start
```

* * *

## Documentation

Base starter includes the latest version of Base and Base Modules to get you started.

Base starter has a powerful GulpJS config which compiles SCSS with live reload support, optimises images minifies CSS/JS and can inline CSS/JS code.

The GulpJS file has a series of tasks which are listed below:

| Gulp Task | Purpose |
| --------- | ------- |
| `sass` | Compiles `src/style.scss` into `src/css/style.css` and `/dist/css/style.css` |
| `jsmin` | All JS code located within `/src/js/` is minified and compiled into `dist/` |
| `imagemin` | All images (svg, png, jpg, gif) are optimised and compressed without sacrificing quality by removing metadata and unnecessary color profiles to save bytes and make images load much faster. The optimised images are compiled within `dist/` |
| `browserSync` | Automatically reloads the browser whenever a SCSS or HTML file is saved within `src/` | 
| `inlinesource` | A task which embeds all `<script>`, `<link>` and `<img>` code inline within a HTML document. Will only occur to elements which have the inline attribute applied (eg: `<script inline>`). The compiled HTML files with the embedded code are saved within `dist/` | 

There are a series of npm scripts that can perform all the above tasks in a single action. Below is a list of all the npm scripts within the Base Starter package.json.

| NPM Task | Outcome |
| -------- | ------- |
| `npm start` | Starts up a server using BrowserSync and watches for all HTML and SCSS changes within `/src` |
| `npm run clean` | Removes `/dist` |
| `npm run build` | The build task runs gulp tasks in the following order: `clean`, `sass`, `imagemin`, `jsmin`, `inlinesource` |
| `npm run dist` | The dist task runs gulp tasks in the following order: `clean`, `sass`, `imagemin`, `jsmin`, `inlinesource` |

If you would like to learn more about Base and the Base Modules, head over to the [main documentation](https://github.com/getbase/base#documentation).

* * *

## Support

* IE10+ and all other modern browsers.

* * *

## Authors

#### Matthew Hartman

* [https://twitter.com/matthewhartmans](https://twitter.com/matthewhartmans)
* [https://github.com/matthewhartman](https://github.com/matthewhartman)

* * *

## License

Code released under the [MIT Open Source](https://opensource.org/licenses/MIT) license.
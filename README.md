# Start Template

**The technology used: SCSS, JS, Webpack, Gulp.**

## INSTALLATION

You shall see the following files and directories:

    src/assets/              fonts, video, json and other static files
    src/components/          html components
    src/scss/                scss files
    src/js/                  js files
    src/img/                 images
    src/htaccess             Apache web server config file

---

## REVIEW

### HTML

    components/              html components
    index.html               index page file

### SCSS

```
    1-setting/               general project settings
    2-design-tokens/         variables for the typography, colors, spacing, media-queries, or any other attributes
    3-mixins/                global mixins and functions
    4-generic/               global box-sizing rules, CSS resets, or print styles –
                             anything that should be set right at the beginning of your CSS
    5-elements/              styles of headlines, buttons, links, lists, etc.
    6-skeleton/              wrappers, containers, grids, and all kinds of reusable objects that provide layout patterns.
    7-components/            design the components of the UI
    8-utilities/             utility and helper classes
    9_shame.scss             is a place for all the shameful CSS solutions like quick fixes
    index.scss               index style file
```

### JS

    modules/                 js modules
    index.js                 index file

---

## QUICK START

On command line, type in the following commands:

```
    cd ./yourRepository
    $ npm i         or     yarn install
    $ npm start     or     yarn start
    ---
    Local: http://localhost:3000 (Example)
    Tunnel: https://tame-bulldog-69.loca.lt (Example)
```

## COMMANDS

```
    gulp start               start project
    gulp build               create a minimized build
    gulp fonts               conversion of fonts from ttf in woff2
    gulp deploy              deploy project

    or

    yarn start
    yarn build
    yarn fonts
    yarn deploy
```

## FOR DEPLOY

    Rename .env.test to .env
    Change user, password, host on the current.

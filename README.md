# electron-livereload-starter

This electron starter uses webpack-dev-server to automatically reload changes while developing an electron app.
The objective of this is to make a very simple skeleton project so the developer can get a better understanding
on how everything fits together.

There are starter projects like [https://github.com/chentsulin/electron-react-boilerplate](electron-react-boilerplate) that
you can use that has react+redux.

```shell
npm install
#runs webpack dev server which compile dynamically app/index.js
npm run start-dev
#starts the electron
npm run start
```

You can now edit app/index.js and see your changes reloaded in your running
electron app.

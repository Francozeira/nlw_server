# Ecoleta :recycle: :satellite: :purple_heart: :iphone: :computer:

![NodeJS_Badge][server_nodejs_badge] ![React_Badge][web_react_badge] ![React_Native_Badge][mobile_react-native_badge] ![Node_Badge][node_version_badge]

Ecoleta is a small project focused on bringing a experience of easy registering and searching for garbage collection locations via website or mobile app.

<img src="./assets/main_title.png" />

This is a one week fullstack development project, composed of a web page, mobile app and web server with the use of TypeScript to create a Node.js server for the backend, web page with React.js and React Native supported with Expo for the mobile app.

This is the backend developed for this project, you can check the web frontend at [Ecoleta web](https://github.com/Francozeira/nlw_web) and mobile application at [Ecoleta mobile](https://github.com/Francozeira/nlw_mobo), also, all the image assets in the project were provided by [Rocketseat](https://rocketseat.com.br/).

A small list of tech characteristics and utils used in the project worth mentioning:

- Server
    - Express
    - Knex
    - SQLite
    - Brazilian Institute of Geography and Statistics API
    - Multer
    - Insomnia (API Design Plataform)
- Web
    - Figma (design prototype)
    - React
    - Fleaflet (Map Interface)
    - Google Fonts
- Mobile
    - React Native
    - Expo
    - Fleaflet (Map Interface)

## Project setup

Make sure to install all dependencies prior to run the application, on package.json file you can check all npm scripts used. Please note that this project was designed based on the use of Expo app to run and test the project.


### Compiles for development

```
# Runs the migrations for the Knex.js DB:
$ npm run migrate

# Runs the seed for items in the Knex.js DB:
$ npm run seed

# Runs the server at http://localhost:3334/:
$ npm run dev
```

And that's basically it for starting the development of the project, pretty simple, huh?

------------

## :art: Images

<img src="./assets/full_use.png" />

> Full web and mobile experience

<!-- Badges -->

[node_version_badge]: https://img.shields.io/badge/node-12.17.0-green

[web_react_badge]: https://img.shields.io/badge/web-react-blue

[mobile_react-native_badge]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[server_nodejs_badge]: https://img.shields.io/badge/server-nodejs-important
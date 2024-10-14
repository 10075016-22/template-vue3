# Template vue 3 app

Vue 3 project with the following integrated services:

- [Naïve UI](https://www.naiveui.com/en-US/light)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/es/docs/intro)
- [xIcons](https://www.xicons.org/#/)
- [Vue-i18n](https://vue-i18n.intlify.dev/)


##  Project setup

Before executing the run command in local environment it is essential to perform the following configuration.

1. Create an `.env` file with the following structure

```.env
VITE_BASE_API=http://localhost:8000
```
> Important to start with `VITE_` so that it can be interpreted by Vue's _CLI_, in this case it is used for the base API configuration.

## Run locally
```
npm run dev
```

You must have previously installed the dependencies, for this you can use the command:

```
npm install
```
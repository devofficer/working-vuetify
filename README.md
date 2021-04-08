# vesta-lease-ui

This is a Vue JS site that will connect to APIs generated by Amazon Amplify. It will use stripe for billing and will be backed by the [Guesty APIS](https://docs.guesty.com/).

To start we will mock up all data that we have not been provided an api for.

The current Templates to reference are at https://xd.adobe.com/view/c27d47f5-6d80-4346-b767-76b807626c4a-972e/grid

The designs currently only explicitly show Desktop views, but the site must be mobile optimized.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Plugins in use

- [Veutify](https://vuetifyjs.com/en/)
- [Vue Stripe](https://github.com/morphatic/v-stripe-elements) alternatively use (https://vuestripe.com/))
- [Vue2-google-maps](https://github.com/xkjyeah/vue-google-maps)

### Code guidelines

- Use all lowercase file names preferably using periods for spaces (dot case)
- Use yarn
- Put api mocked up data in src/data directory, when this is live we should be able to delete these if we do not need them for testing.
- Use [Material design icons](https://materialdesignicons.com/) first if available, [Font awesome icons](https://fontawesome.com/) next if they work, if neither work we will consider a custom icon

### Project terminology

#### User Roles

- Lessee: Public user who will use the site to rent a vacation rental
- Lessor: User who owns the vacation rental
- PM: Property manager who will be able to do basically all the same functions as the Lessor
- Admin: Administrator

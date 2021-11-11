[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> A simple monorepo using Lerna

:zap: A mono repository using Piral for microfrontends. 

## Getting Started

First, use `lerna` to bootstrap the mono repo. Make sure to have `yarn` (v1) installed for this.

```sh
npx lerna bootstrap
```

## Running the Code

Now you can run all pilets:

```sh
yarn start
```

This is an alias for `yarn watch:all`.

Alternatively, run only a single pilet (e.g., the `my-pilet`):

```sh
name=my yarn watch:pilet
```

Or if you wan to, you can also run the app shell in isolation:

```sh
yarn watch:piral
```

## Adding a new pilet

Just run

```sh
name=foo yarn add:pilet
```

it will create a new directory *packages/foo-pilet*, already scaffolded and integrated. Choose a different run than **foo** for your purposes.

## More Information

The [Piral documentation page](https://docs.piral.io/guidelines/tutorials/23-monorepo) has a tutorial on this. Make sure to follow and understand the tutorial before going deep into this sample.

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).

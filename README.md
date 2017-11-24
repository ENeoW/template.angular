# `angular-module-library` - Template para generar librerias de angular

> Template para librerias de [Angular](https://angular.io/) compatibles con [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)/[JIT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html), [SCSS](http://sass-lang.com/)-styles externos y HTML-templates.

# Main Features
- **AOT/JIT** compatible library build via [Angular Compiler](https://www.npmjs.com/package/@angular/compiler-cli) (ngc).
- **UMD** build via [Webpack](https://webpack.js.org/) that allows you to use your library for browser builds. You may play with it on [Plunker](http://embed.plnkr.co/VbO1hldrCfF6ITG6VvGG/).
- **Testing** with [Karma](https://karma-runner.github.io/1.0/index.html) and [Jasmine](https://jasmine.github.io/).
- **Test coverage** report via [Istanbul](https://github.com/gotwarlost/istanbul).
- **Watch modes** for building and testing procedures that makes developing process easier.
- **Linting** with [TSLint](https://palantir.github.io/tslint/) and [Codelyzer](https://github.com/mgechev/codelyzer) for static code analysis.
- **Exploring your build** via [Sourcemap Explorer](https://www.npmjs.com/package/source-map-explorer) that shows you a treemap visualization to help you debug where all the code is coming from. 
- **Documentation generation** via [Compodoc](https://github.com/compodoc/compodoc). Take a look at [documentation example](https://trekhleb.github.io/angular-library-seed/).
- **Documentation hosting**  via [GitHub Pages](https://pages.github.com/).
- **AOT/JIT/UMD demos** via [Webpack](https://webpack.js.org/) and [SystemJS](https://github.com/systemjs/systemjs) that allows you to test library builds.
- **Continuous integration** with [Travis CI](https://travis-ci.org/).
- **Code coverage** badge via [Codecov](https://codecov.io) as a reminder to cover code with tests.

# File Structure
```
angular-library-seed
  ├─ src                          * Library sources home folder (THE PLACE FOR YOUR LIBRARY SOURCES)
  |  ├─ components                * Library components with tests
  |  ├─ services                  * Library services with tests
  |  ├─ index.ts                  * Library entry point that is used by builders
  |  └─ module.ts                 * Library module
  |
  ├─ .editorconfig                * Common IDE configuration
  ├─ .gitignore	                  * List of files that are ignored while publishing to git repo
  ├─ .npmignore                   * List of files that are ignored while publishing to npm
  ├─ .travis.yml                  * Travic CI configuration
  ├─ LICENSE                      * License details
  ├─ README.md                    * README for you library
  ├─ gulpfile.js                  * Gulp helper scripts
  ├─ library-package.json         * Package configuration for your library
  ├─ template-package.json        * NPM dependencies, scripts for the template
  ├─ karma-test-entry.ts          * Entry script for Karma tests
  ├─ karma.conf.ts                * Karma configuration for our unit tests
  ├─ package.json                 * NPM dependencies, scripts and package configuration
  ├─ tsconfig-aot.json            * TypeScript configuration for AOT build
  ├─ tsconfig.json                * TypeScript configuration for UMD and Test builds
  ├─ tslint.json                  * TypeScript linting configuration
  ├─ webpack-test.config.ts       * Webpack configuration for building test version of the library
  ├─ webpack-umd.config.ts        * Webpack configuration for building UMD bundle
  └─ yarn.lock                    * Yarn lock file that locks dependency versions
```

# Getting Started

## Dependencias

#### Node/NPM
Instalar la ultima version de Node y NPM siguiendo las [instrucciones](https://nodejs.org/en/download/). Versiones Node ≥ 7.0 y NPM ≥ 4.

#### Gulp
[Gulp.js](https://gulpjs.com/)
Gulp.js es un build system(sistema de construcción) que permite automatizar tareas comunes de desarrollo, tales como la minificación de código JavaScript, recarga del navegador, compresión de imágenes, validación de sintaxis de código y un sin fin de tareas más.

Instalar Gulp `npm install gulp-cli -g`.

#### Yarn
[Yarn package manager](https://yarnpkg.com/en/)
Yarn es un administrador de dependencias open source y fue creado por miembros de Facebook y Google, su principal característica es la rápidez. [Más ventajas](https://yarnpkg.com/en/).

Instalar Yarn siguiendo las [instrucciones](https://yarnpkg.com/en/docs/install) para windows, despues de instalar reinciar el equipo.

## Instalación
- `fork` el repositorio.
- `clone` localmente.
- `gulp merge-json` para integrar el archivo package.json.
- `yarn install` para instalar las dependencias requeridas.

## Replace `TickTock` library with your own library
This step may be optional at first since you might just want to play with existing library example.

Once you're ready to develop your own library you should do the following.
- Check and re-configure `package.json` fields like `name`, `version`, `keywords`, `description` etc. You may read about specifics of npm's [package.json handling](https://docs.npmjs.com/files/package.json) to do that.
- Replace the content of `src` folder with your library sources. Your library must have `index.ts` file as an entry point for further building.

## Build the library
- `yarn build` for building the library once (both ESM and AOT versions).
- `yarn build:watch` for building the library (both ESM and AOT versions) and watch for file changes.

You may also build UMD bundle and ESM files separately:
- `yarn build:esm` - for building AOT/JIT compatible versions of files.
- `yarn build:esm:watch` - the same as previous command but in watch-mode.
- `yarn build:umd` - for building UMD bundle only.
- `yarn build:umd:watch` - the same as previous command but in watch-mode.

## Other commands

#### Lint the code
- `yarn lint` for performing static code analysis.

#### Test the library
- `yarn test` for running all your `*.spec.ts` tests once. Generated code coverage report may be found in `coverage` folder.
- `yarn test:watch` for running all you `*.spec.ts` and watch for file changes.

#### Generate documentation
- `yarn docs` for generating documentation locally.
- `yarn gh-pages` for generating documentation and uploading it to GitHub Pages. [Documentation example](https://trekhleb.github.io/angular-library-seed/).

#### Explore the bundle
- `yarn explorer` to find out where all your code in bundle is coming from.

#### Bump library version
- `npm version patch` to increase library version. [More on bumping](https://docs.npmjs.com/cli/version).

`preversion` script in this case will automatically run project testing and linting in prior in order to check that the library is ready for publishing.

#### Publish library to NPM
- `npm publish` to publish your library sources on [npmjs.com](https://www.npmjs.com/). Once the library is published it will be [available for usage](https://www.npmjs.com/package/angular-library-seed) in npm packages.

`prepublishOnly` script in this case will automatically run project testing and linting in prior in order to check that the library is ready for publishing.

#### Cleaning
- `yarn clean:tmp` command will clean up all temporary files like `docs`, `dist`, `coverage` etc.
- `yarn clean:all` command will clean up all temporary files along with `node_modules` folder. 

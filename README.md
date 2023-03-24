## @magic-examples/example

This is a simple example app that show some of the [@magic](https://github.com/magic) features.

visit the [@magic-examples](https://github.com/magic-examples)
github organization to see other examples

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/example.svg
[npm-url]: https://www.npmjs.com/package/@magic/example
[travis-image]: https://api.travis-ci.com/magic/example.svg?branch=master
[travis-url]: https://travis-ci.com/magic/example
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/example/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/example/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/example/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/example
[greenkeeper-image]: https://badges.greenkeeper.io/magic/example.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/example.svg
[snyk-image]: https://snyk.io/test/github/magic/example/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/example

### installation

#### requirements

- be in a directory you want to work in
- have nodejs > 14.2.0 installed.

```
// clone this repository
git clone https://github.com/magic-examples/example ./your-project-name

// go to the new project directoy
cd ./your-project-name

// install @magic dependencies
npm install

// run dev server
npm run dev

// goto http://localhost:2323  in your browser to see the page

// build changes you made to docs dir
npm run build

// reset the remotes to your repository
git remote rename origin upstream
git remote add origin git@provider.com/{your name}/{your repo}

// publish changes, after committing them to the local git
git push

```

# Mango Platform UI

### Usage

```bash
git clone https://github.com/haighis/mango-platform-ui.git
cd mango-platform-ui

# Run npm install and write your library name when asked. That's all!
npm install
```

### Features

- todo

### NPM scripts

- `npm t`: Run test suite
- `npm start`: Runs `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch) **(Cmd + Shift + T)**
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings, create docs **(Cmd + Shift + B)**
- `npm run lint`: Lints code **(Ctrl + Shift + L)**

### Automatic CI builds and Docs generation

_**Prerequisites**: you need to create accounts for:_

- [Travis CI](https://travis-ci.org/)
- [NPM](https://www.npmjs.com/)

After publishing your repo to GitHub, copy the clone URL and paste it into the `url` property of the `repository` section of your package.json file.

Then log into Travis CI and add the repository to your account.

Run the following command to prepare hooks and stuff:

```bash
npm run semantic-release-prepare
```

Follow the console instructions to install semantic release run it (answer NO to "Generate travis.yml").

```bash
npm install -g semantic-release-cli
semantic-release-cli setup
# IMPORTANT!! Answer NO to "Generate travis.yml" question. Is already prepared for you :P
```

You will be prompted for your Travis and GitHub credentials so that Travis CI can publish docs to GitHub Pages.

> Note: Semantic release will ask for your your NPM credentials, but these will not be used because automatic releases are disabled.

After pushing your first commit to master, Travis CI will run a CI build that runs your tests and generates documentation for your library.

- After the CI build completes, you can go to the Settings for your repo to note the URL where your docs are published to GitHub Pages.

### Git Hooks

By default, there is a disabled git hook. It's set up when you run the `npm run semantic-release-prepare` script. They make sure:

- Your build is not going fail in [Travis](https://travis-ci.org) (or your CI server), since it's runned locally before `git push`

### Manually Creating a Release and Publishing to NPM

When you're ready to publish a release on GitHub, just do it.

- You may want to follow a [branching model](http://nvie.com/posts/a-successful-git-branching-model) such as [GitFlow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) or [GitHub Flow](https://help.github.com/articles/github-flow).

To publish to NPM manually, just follow their [instructions](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### FAQ

#### What is `npm install` doing the first time runned?

It runs the script `tools/init` which sets up everything for you. In short, it:

- Configures RollupJS for the build, which creates the bundles.
- Configures `package.json` (typings file, main file, etc)
- Renames main library file in src

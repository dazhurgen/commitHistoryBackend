<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<h2>Commit History backend using nestjs and vuejs </h2>


## Description

A small server to get it's own commit history.

## Installation

```bash
$ npm install
```

## Configuring
  Before running the server you must create a .env file in the root folder. and add the following values

```bash
  GITHUB_API_BASE_URL = https://api.github.com
  PORT = 3000
  GITHUB_TOKEN = your_own_ghp_git_token
  OWNER = dazhurgen
  FRONT_END_REPO = 
  BACKEND_REPO = = commitHistoryBackend
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


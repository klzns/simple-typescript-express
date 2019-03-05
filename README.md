# Simple TypeScript Express

> Simple TypeScript Express server starter project

### Features

- Tests with Jest and supertest
- TypeScript watch build ready with debugging enabled
- VSCode settings
- TSLint config
- Logs with winston
- Env variables with dotenv

### Scripts

| npm script    | Description                                                                               |
| ------------- | ----------------------------------------------------------------------------------------- |
| `start`       | Does the same as 'npm run serve'. Can be invoked with `yarn start`                        |
| `build`       | Full build. Runs ALL build tasks (`build-ts`, `tslint`)                                   |
| `serve`       | Runs node on `build/server.js` which is the apps entry point                              |
| `watch-node`  | Runs node with nodemon so the process restarts if it crashes. Used in the main watch task |
| `watch`       | Runs all watch tasks (TypeScript, Node)                                                   |
| `test`        | Runs tests using Jest test runner                                                         |
| `watch-test`  | Runs tests in watch mode                                                                  |
| `build-ts`    | Compiles all source `.ts` files to `.js` files in the `build` folder                      |
| `watch-ts`    | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed       |
| `tslint`      | Runs TSLint on project files                                                              |
| `debug`       | Performs a full build and then serves the app in watch mode                               |
| `serve-debug` | Runs the app with the --inspect flag                                                      |
| `watch-debug` | The same as `watch` but includes the --inspect flag so you can attach a debugger          |

### Credits

Forked and simplified from [TypeScript-Node-Starter](https://github.com/Microsoft/TypeScript-Node-Starter).

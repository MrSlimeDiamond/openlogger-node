# openlogger-node

the code inside is really bad, so maybe improve it with a pull request, looking for a friend

## Usage

### Installing

```
npm install openlogger-node
```

### Coding part thing

```javascript
import openlogger from 'openlogger-node'
import chalk from 'chalk'
const log = new openlogger('Test', chalk.green, { // you can just make color null if you want it to be white
    format: '[%n/%l]: %m',
    debugLevel: 0,
})

log.info('hello world')
```

> warn, error, and fatal will ignore colors, the color argument is for info

%n - Name

%m - Input

%l - Level (info, warn, error, fatal)

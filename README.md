# openlogger-node

the code inside is really bad, so maybe improve it with a pull request, looking for a friend

## Usage

### Installing

```
npm install openlogger-node
```

### Coding part thing

```javascript
import openlogger from "openlogger-node";
import chalk from "chalk"; // for colors

const log = new openlogger("Test", chalk.blue); // if you do not want a color, don't worry about the second argument
log.setFormat("%n %t > %i");

log.info("Hello world!");
log.warn("oh no!");
log.error("something very bad");
log.fatal("something more bad than very bad");
```

> warn, error, and fatal do not need colors

%n - Name

%i - Input

%t - Type (info, warn, error, fatal)

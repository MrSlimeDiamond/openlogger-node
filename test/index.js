import openlogger from "../index.js";
import chalk from "chalk";
const log = new openlogger("Test", chalk.green);
log.setFormat("%n (%t): %i");
log.setDebugLevel(3);

log.info("hello world");
log.warn("hello world");
log.error("hello world");
log.fatal("hello world");
log.debug("hello world");
log.debug("aaa", 3);

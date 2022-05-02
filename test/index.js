import openlogger from "../index.js";
import chalk from "chalk";
const log = new openlogger("Test", chalk.blue);
log.setFormat("%n (%t): %i");

log.info("hello world");
log.warn("hello world");
log.error("hello world");
log.fatal("hello world");

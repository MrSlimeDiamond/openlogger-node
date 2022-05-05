import chalk from "chalk";

class OpenLogger {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.format = null;
    this.type = null;
    this.debug_level = 0;

    if (!this.name) {
      throw new Error("Logger must have a name");
    }
  }

  info(input) {
    this.type = "INFO";
    if (!this.color) {
      this.color = chalk.white;
    }
    console.log(
      this.color(
        this.format
          .replaceAll("%n", this.name)
          .replaceAll("%i", input)
          .replaceAll("%t", this.type)
      )
    );
  }

  warn(input) {
    this.type = "WARN";
    console.log(
      chalk.yellow(
        this.format
          .replaceAll("%n", this.name)
          .replaceAll("%i", input)
          .replaceAll("%t", this.type)
      )
    );
  }

  error(input) {
    this.type = "ERROR";
    console.log(
      chalk.redBright(
        this.format
          .replaceAll("%n", this.name)
          .replaceAll("%i", input)
          .replaceAll("%t", this.type)
      )
    );
  }

  fatal(input) {
    this.type = "FATAL";
    console.log(
      chalk.red(
        this.format
          .replaceAll("%n", this.name)
          .replaceAll("%i", input)
          .replaceAll("%t", this.type)
      )
    );
  }

  debug(input, level) {
    if (!level) level = 1;
    if (this.debug_level >= 1 && this.debug_level >= level) {
      this.type = "DEBUG";
      console.log(
        chalk.blue(
          this.format
            .replaceAll("%n", this.name)
            .replaceAll("%i", input)
            .replaceAll("%t", this.type)
        )
      );
    }
  }

  setFormat(format) {
    this.format = format;
  }

  setDebugLevel(level) {
    this.debug_level = level;
  }
}

export default OpenLogger;

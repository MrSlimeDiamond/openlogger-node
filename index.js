import chalk from "chalk";
class OpenLogger {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.format = null;
    this.type = null;
  }

  info(input) {
    this.type = "INFO";
    if (!this.color) {
      this.color = chalk.white;
    }
    if (!this.name) {
      throw new Error("Logger must have a name");
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
    if (!this.name) {
      throw new Error("Logger must have a name");
    }
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
    if (!this.name) {
      throw new Error("Logger must have a name");
    }
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
    if (!this.name) {
      throw new Error("Logger must have a name");
    }
    console.log(
      chalk.red(
        this.format
          .replaceAll("%n", this.name)
          .replaceAll("%i", input)
          .replaceAll("%t", this.type)
      )
    );
  }

  setFormat(format) {
    this.format = format;
  }
}

export default OpenLogger;

import chalk from 'chalk'

const defaultFormat = '%n > %l > %m'
class OpenLogger {
    constructor(
        name,
        color,
        options = {
            debugLevel: 0,
            format: defaultFormat,
        }
    ) {
        this.name = name
        this.color = color
        this.format = options.format || defaultFormat
        this.options = options
        this.level = null
        this.debug_level = options.debugLevel || 0

        if (!this.name) {
            throw new Error('Logger must have a name')
        }
    }

    info(message) {
        this.level = 'INFO'
        if (!this.color) {
            this.color = chalk.white
        }
        console.log(
            this.color(
                this.format
                    .replaceAll('%n', this.name)
                    .replaceAll('%m', message)
                    .replaceAll('%l', this.level)
            )
        )
    }

    warn(message) {
        this.level = 'WARN'
        console.log(
            chalk.yellow(
                this.format
                    .replaceAll('%n', this.name)
                    .replaceAll('%m', message)
                    .replaceAll('%l', this.level)
            )
        )
    }

    error(message) {
        this.level = 'ERROR'
        console.log(
            chalk.redBright(
                this.format
                    .replaceAll('%n', this.name)
                    .replaceAll('%m', message)
                    .replaceAll('%l', this.level)
            )
        )
    }

    fatal(message) {
        this.level = 'FATAL'
        console.log(
            chalk.red(
                this.format
                    .replaceAll('%n', this.name)
                    .replaceAll('%m', message)
                    .replaceAll('%l', this.level)
            )
        )
    }

    debug(message, level) {
        if (!level) level = 1
        if (this.debug_level >= 1 && this.debug_level >= level) {
            this.level = 'DEBUG'
            console.log(
                chalk.blue(
                    this.format
                        .replaceAll('%n', this.name)
                        .replaceAll('%m', message)
                        .replaceAll('%l', this.level)
                )
            )
        }
    }

    /**
     *
     * @deprecated since 1.0.3
     */
    setFormat(format) {
        this.format = format
    }

    /**
     *
     * @deprecated since 1.0.3
     */
    setDebugLevel(level) {
        this.debug_level = level
    }
}

export default OpenLogger

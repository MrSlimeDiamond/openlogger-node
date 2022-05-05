import openlogger from '../index.js'
import chalk from 'chalk'
const log = new openlogger('Test', chalk.green, {
    format: '[%n/%t]: %i',
    debugLevel: 2,
})

log.info('hello world')
log.warn('hello world')
log.error('hello world')
log.fatal('hello world')
log.debug('hello world')
log.debug('aaa', 3)

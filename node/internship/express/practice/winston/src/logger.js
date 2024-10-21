import { createLogger, transports, format } from 'winston'

// also can
const customFormat = format.combine(format.timestamp(), format.printf((info)=>{
  return `${info.timestamp} [${info.level.toUpperCase().padEnd(7)}] - ${info.message}`
}))

const logger = createLogger({
  /*
  //custom formating not compulsory
  format: format.printf((info)=>{
    return `[${info.level.toUpperCase().padEnd(7)}] - ${info.message}`
  }),
  */
  format: customFormat,
   // print up to debug according to level
  level: 'debug',
  // transport
  transports: [
    // transport to console
    // up to silly level 
    new transports.Console({ level: 'silly' }),
    // transport to file
    // up to info level
    new transports.File({ filename: 'app.log', level: 'info' })
]

});

export default logger;

/*
types of log:
error
warn
info
debug
silly
verbose
*/

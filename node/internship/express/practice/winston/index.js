import express from 'express'
import logger from './src/logger.js'
const app = express();

// highest to lower priority
logger.error("error");
logger.warn("warn");
logger.info("info");
logger.verbose("verbose");
logger.debug("debug");
logger.silly("silly");

// for database in recursive error printing.  
/*
  logging: (message) => {
    logger.info(message);
  }
*/

app.listen(4050,()=>{
  logger.info("app is running");
});


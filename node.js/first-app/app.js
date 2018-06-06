const EventEmitter = require('events');
 
//Import Logger class and create logger object to be used as EventEmitter
const Logger = require('./logger')
const logger = new Logger();
//listen for Event named messageLogged
logger.on('messageLogged', (arg) => {
    console.log('Listener Called', arg)
})
//adding this change so i can test the push of my code up to the repo
logger.log('message');
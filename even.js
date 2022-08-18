const Logger =  require("./logger")
const logger = new Logger()

logger.on("messageLogged", (arg) => {
    console.log("called to listener",arg);
})
    
logger.log("message")

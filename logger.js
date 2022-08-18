const EventEmmiter = require("events")

class  Logger extends EventEmmiter  {
     log = (message) => {
        console.log(message)
        this.emit("messageLogged", {id:1,url:"https//..."}) 
      }
}

module.exports = Logger
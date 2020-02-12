const db = require()

const listAll = () => {
    return new Promise(function(resolve, reject) {
        // the function is executed automatically when the promise is constructed
      
        // after 1 second signal that the job is done with the result "done"
        setTimeout(() => resolve("done1"), 1000);
      });
}

module.exports = {
    listAll
}
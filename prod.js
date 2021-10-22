module.exports = async function prod(port) {
    process.env.PORT = port.toString()
  
    // Most frameworks export some kind of express server or other http listener. Your prod script
    // just needs to start it and bind it to the provided port.  In the case of Sapper, the way to do
    // this is to set the PORT environment variable and run the provided server script
    require('./__sapper__/build/server/server')
  }
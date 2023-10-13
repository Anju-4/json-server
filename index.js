const jsonServer= require('json-server')

// create jspn server using json-library
const MPServer = jsonServer.create()

// set up path/route for db.json file
const router = jsonServer.router('db.json')

// Returns middlewares used by JSON server
const middleware = jsonServer.defaults()

// set up port for server app
const port =4000 || process.env.PORT

// use middleware and router in server
MPServer.use(middleware)
MPServer.use(router)

// server listen for request from frontend
MPServer.listen(port,()=>{
    console.log(`media player server started at port ${port},waiting for client request `);
})

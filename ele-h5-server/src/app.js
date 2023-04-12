const jsonServe=require('json-server')
const path = require('path')
const route = require('./route')
const db = require('./db')()




const server = jsonServe.create()

const middlewares = jsonServe.defaults({
    static:path.join(__dirname,'../public')
})

server.use(middlewares)
// req.body
server.use(jsonServe.bodyParser)

server.use((req,res,next)=>{
    const json =res.json.bind(res)
    res.success = (data) => {
        return json({
            code: 0,
            msg: '请求成功',
            data
        })
    }
    res.fail = (msg,code=-1,data)=>{
        return json({
            code,
            msg,
            data
        })
    }
    next()
})

route(server)
const jsonRouter = jsonServe.router(db)
server.use('/api',jsonRouter)


server.listen(8000,() => {
    console.log('json server is running at 8000')
})
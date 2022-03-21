const app = require("./index");

const connect = require("./configs/db");

app.listen(5000,()=>{
    console.log("port listening on 5000");
    connect();
})
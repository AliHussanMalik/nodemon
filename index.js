const http =require("http")

http.createServer(function(req,response){
    if(req.url == "/"){
        response.write("Hello World1")
    }
    else if(req.url == "/about"){
        response.write("Hello About waly")
    }
    else if(req.url == "/Home"){
        response.write("Hello Home waly")
    }
    else
{    response.write("Error 404 Module Not Found")}
response.end();
console.log("Dhoomm da nana na")

})
.listen(3000)
console.log("Server on this port :3000")
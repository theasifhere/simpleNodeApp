var http = require('http');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

http.createServer((req, res) => {
    res.end('Hello Developer');
}).listen( server_port , server_ip_address, ()=>{
    console.log( `listening on ${server_ip_address}: ${server_port}`);
    
})
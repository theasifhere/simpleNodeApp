var http = require('http');

var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000,

server_ip_address   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

http.createServer((req, res) => {
    res.end('Hello Developer');
}).listen( server_port , server_ip_address, ()=>{
    console.log( `listening on ${server_ip_address}: ${server_port}`);
    
})
var port = process.env.PORT || 8090;
var domain = process.env.WEBSOCKET_DOMAIN ? process.env.WEBSOCKET_DOMAIN : 'localhost';
module.exports = {
    port: port,
    domain: domain,
};

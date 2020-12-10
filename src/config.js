var port = process.env.PORT || 8090;
module.exports = {
    port: port,
    server: process.env.WEBSOCKET_DOMAIN ? process.env.WEBSOCKET_DOMAIN : 'localhost:' + port,
};

const http = require('http');
const url = require('url');

const app = {};

app.config = {
    port: 3000,
};

//Create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
        server.listen(app.config.port, () => {
            //console.log('Listening to port ${app.config.port}')
            console.log(`Listening port ${app.config.port}`);
        });
};
//Handle reuest and response
app.handleReqRes = (req, res) => {

    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    res.end('Hello City');
};

//Start the server
app.createServer();
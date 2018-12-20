const path = require('path');
const fs = require('fs');

const express = require('express');
const https = require('https');

const homedir = require('os').homedir();
const isDev = process.env.NODE_ENV === 'development';

const port = isDev ? 8000 : 80;

function register(app) {
    if (!isDev) {
        app.use(
            express.static(
                path.join(__dirname, '..', 'frontend', 'build')
            )
        );
    }

    return app;
}

const http_server = express();
register(http_server);
http_server.listen(port, () => {
    console.log(`http listening on port ${port}`);
});

if (!isDev) {
    const options = {
        key: fs.readFileSync(path.join(homedir, '.acme.sh/studentsreview.me/studentsreview.me.key')),
        cert: fs.readFileSync(path.join(homedir, '.acme.sh/studentsreview.me/studentsreview.me.cer'))
    };
    const https_server = https.createServer(options, register(express()));
    https_server.listen(443, () => {
       console.log('https listening on port 443');
    });
}

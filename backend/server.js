const path = require('path');
const fs = require('fs');

const express = require('express');
const https = require('https');

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

const http = express();
register(http);
http.listen(port, () => {
    console.log(`http listening on port ${port}`);
});

if (!isDev) {
    const options = {
        key: fs.readFileSync('/home/ec2-user/.acme.sh/studentsreview.me/studentsreview.me.key'),
        cert: fs.readFileSync('/home/ec2-user/.acme.sh/studentsreview.me/studentsreview.me.cer')
    };
    const https_server = https.createServer(
        options,
        register(express())
    );
    https_server.listen(443, () => {
       console.log('https listening on port 443');
    });
}

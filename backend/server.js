const path = require('path');
const fs = require('fs');

const express = require('express');
const https = require('https');

const mongoose = require('mongoose');

const schools = require('./routes/schools');

const isDev = process.env.NODE_ENV === 'development';

const port = isDev ? 8000 : 80;
const mongo_url = 'mongodb://localhost:27017/StudentsReview';

(async () => {
    mongoose.connect(mongo_url, { useNewUrlParser: true })
        .then(() => {
            console.log('Connected to MongoDB!');
        })
        .catch((err) => {
            console.log(err);
        })
})();

function register(app) {
    app.get('/api/schools', schools);
}

const http_server = express();
register(http_server);

if (isDev) {
    // nothing for now
} else {
    http_server.get('*', function(req, res) {
        res.redirect('https://' + req.headers.host + req.url);
    });
    const options = {
        key: fs.readFileSync('/home/ec2-user/.acme.sh/studentsreview.me/studentsreview.me.key'),
        cert: fs.readFileSync('/home/ec2-user/.acme.sh/studentsreview.me/studentsreview.me.cer')
    };
    let https_server = express();
    https_server.use(
        express.static(
            path.join(__dirname, '..', 'frontend', 'build')
        )
    );
    register(https_server);
    https_server = https.createServer(
        options,
        https_server
    );
    https_server.listen(443, () => {
        console.log('https listening on port 443');
    });
}

http_server.listen(port, () => {
    console.log(`http listening on port ${port}`);
});

const express = require('express');
const path = require('path');

const isDev = Boolean(process.env.dev);

const port = isDev ? 8000 : 80;
const app = express();

if (!isDev) {
    app.use(
        express.static(
            path.join(__dirname, '..', 'frontend', 'build')
        )
    );
}


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

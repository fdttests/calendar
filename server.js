const express = require('express');
const app = express();

app.use(express.static('./dist/app'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', {
        root: 'dist/app'
    });
});

const port = process.env.PORT || 8080;

app.listen(port);

console.info(`App running on port ${port}`);
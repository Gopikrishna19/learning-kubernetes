const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send([
    {
        user: 'Gopi',
        email: 'gopi@gmail.com'
    },
    {
        user: 'Prasanna',
        email: 'prasanna@gmail.com'
    }
]));

app.listen(port, () => console.log(`Example app listening on port ${port}`));

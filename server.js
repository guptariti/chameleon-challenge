const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const items = require('./routes/api');
const cors = require("cors");
app.use(bodyParser.json());
app.use('/api', items);
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is starting on port ${port}`)); 


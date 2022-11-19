const express       = require('express');
const app           = express();
const cors          = require('cors');
const router        = require('./src/routes/index');

const port          = 5000;

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running: ${port}`);
});

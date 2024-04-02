import express from 'express';
import router from './Router/router.js';
import dbConnect from './DB/db.js';

const app = express();

dbConnect();

app.use('/person',router);

app.listen(3000, () => {
    console.log('Server started on port 3000');
})

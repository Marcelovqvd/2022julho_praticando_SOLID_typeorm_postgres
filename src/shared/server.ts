import express from 'express';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('3333'));

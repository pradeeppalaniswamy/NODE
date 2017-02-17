import express  from 'express';
// connect to db
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import routes from './routes';
let app=express();
app.server=http.createServer(app);


//middleware
app.use(bodyParser.json({limit:config.bodylimit}));
app.use('/v1',routes);

app.server.listen(config.port);
console.log(`started on port ${app.server.address().port}`);
export default app;

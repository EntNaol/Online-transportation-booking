const express = require('express');

require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/driver');

const User = require('./models/driver');
const CommentRouter = require('./routes/comment')
const app = express();

// app.use((req, res, next) => {
//   req.on('data', chunk => {
//     const data = JSON.parse(chunk);
//     req.body = data;
//     next();
//   });
// });
app.use("/comment", CommentRouter);
app.use(express.json());
app.use(userRouter);


app.get('/', (req, res) => {
  res.json({ success: true, message: 'Welcome to backend zone!' });
});


const TicketRouter = require('./routes/ticket');
// const dbConnect =require('./models/db')
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/user');
const CommentRouter = require('./routes/comment');

const User = require('./models/user');

const app = express();

// app.use((req, res, next) => {
//   req.on('data', chunk => {
//     const data = JSON.parse(chunk);
//     req.body = data;
//     next();
//   });
// });

app.use(express.json());
app.use(userRouter);



app.listen(8000, () => {
  console.log('port is listening');
});



app.use("/comment", CommentRouter);
app.use("/ticket", TicketRouter);
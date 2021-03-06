const express = require('express'); 
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');
const searchRouter = require('./routers/searchRouter');
const AppError = require('./utils/AppError');
const errorController = require('./controllers/errorController');
const jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(cors());
app.use(morgan('tiny'));

//serve static files from react app 
app.use(express.static(path.join(__dirname, 'react/build')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(jwtSecret));

app.use((req, res, next) => {
   console.log('middleware');
   next();
});

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/search', searchRouter);

// Serve static assets from react if in production
if (process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, 'react/build')));
   app.get('*', (req, res) =>{
      res.sendFile(path.join(__dirname+'/react/build/index.html'));
   });
}

app.use(errorController); 

module.exports = app; 



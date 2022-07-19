// import packages
const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

// check if current environment is production
const { environment } = require('./config');
const isProduction = environment === 'production';

// initialize express application
const app = express();

// connect morgan middleware for logging information about request and responses
app.use(morgan('dev'));

// add cookie-parser middleware for parsing cookies
// and express.json middleware for parsing JSON bodies of requests with Content-Type of "application/json"
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors (Cross-Origin Resource Sharing) only in development. React and Express resources will come from same origin in production.
    app.use(cors());
  }
  
  // helmet helps set a variety of headers to better secure your app
  // add the crossOriginResourcePolicy to the helmet middleware with a policy of cross-origin. This will allow images with URLs to render in deployment.
  app.use(
    helmet.crossOriginResourcePolicy({ 
      policy: "cross-origin" 
    })
  );
  
  // Set the _csrf token and create req.csrfToken method
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
      }
    })
  );

  // import routes
const routes = require('./routes');
// connect all routes
app.use(routes);

module.exports = app;

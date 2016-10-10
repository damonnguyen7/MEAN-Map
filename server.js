var express = require('express'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 3000,
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express();
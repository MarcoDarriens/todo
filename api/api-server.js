// Server.js
	
	// Server.js

	//Set up
	var config 			= require(process.cwd() + '/config/index.js');

	var express 		= require('express');
	var mongoose 		= require('mongoose');
	var morgan 			= require('morgan');
	var bodyParser 		= require('body-parser');
	var methodOverride 	= require('method-override');

	var app = express();

	mongoose.connect(config.SERVER[config.ENV].);

	app.use(express.static(__dirname + '/public'));
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({'extended': 'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({type: 'application/vnd.api+json'}));
	app.use(methodOverride());

	//listen (Start app with node server.js)
	app.listen(8080);
	console.log('App lisening on port 8080');
module.exports = {
	ENV		: 'LOCAL',													// Define Environment (LOCAL, PROD)
	SERVER 	: {
		LOCAL : {
			host : 'todo.local',
			// interfaces : 'eth0',
			port : 3502,
			options : {
				connections : {
					state: {
						ignoreErrors: false,
						clearInvalid: false,
						strictHeader: true
					}
				}
			},
			api: 'http://api.advertisers.darriens.local'
		},
		PROD : {
			host : 'backend.darriensmobile.com',
			// interfaces : 'eth0',
			port : 3502,
			options : {
				connections : {
					state: {
						ignoreErrors: false,
						clearInvalid: false,
						strictHeader: true
					}
				}
			},
			api: 'http://api.advertisers.darriens.com'
		}
	},
	DB : {
			mongodb: {
				LOCAL : {
					enabled : 	true,
					url :		'mongodb://192.168.1.141:27017/advertisers'
				},
				PROD : {
					enabled : 	true,
					url :		'mongodb://192.168.1.141:27017/advertisers'
				}
			},
			// mysql: {
			// 	LOCAL : {
			// 		enabled: 	false,
			// 		host: 		'localhost',
			// 		user: 		'root',
			// 		password: 	'123456',
			// 		database: 	'darriens_mobile',
			// 		port: 		3306,
			// 	},
			// 	PROD : {
			// 		enabled: 	false,
			// 		host: 		'localhost',
			// 		user: 		'root',
			// 		password: 	'123456',
			// 		database: 	'darriens_mobile',
			// 		port: 		3306,
			// 	}
			// }

	},
	// SMTP	: { 														// Credentials for email
	// 			user : "support@darriens.com",
	// 			pass : "0q233xV8UV",
	// 			from : "Darriens Support<support@darriens.com>",
	// 			to	 : {
	// 				LOCAL 	: "anthony@darriens.com",
	// 				PROD 	: "marco.giardini@darriens.com, anthony@darriens.com"
	// 			}
	// },
	LOGS	: {
				LOCAL : {
					debug: true,
					path : {
						error 	: process.cwd() + '/logs/errors/api-error.log',
					}
				},
				PROD : {
					debug: true,
					path : {
						error 	: process.cwd() + '/logs/errors/api-error.log',
					}
				}
	}
}

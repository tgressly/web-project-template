#!/usr/bin/env node
var program = require('commander');

program
    .version('0.0.1')
    .parse(process.argv);

if(!program.args.length) {
    program.help();
} else {
    var file = program.args[0];  
    var fs = require('fs');
	var htmlString = "<!DOCTYPE html>\n<html lang='de'>\n<head>\n<meta charset='utf-8'>\n<title>DOM</title>\n<link rel='stylesheet' href='css/style.css'>\n</head>\n<body>\n</body>\n<script src='js/app.js'></script>\n</html>";
	fs.mkdirSync(file);
	fs.writeFileSync(file + '/index.html', htmlString);
	fs.mkdirSync(file + '/css');
	fs.writeFileSync(file + '/css/style.css', "");
	fs.mkdirSync(file + '/js');
	fs.writeFileSync(file + '/js/app.js',"");
}


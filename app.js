var http = require('http'),
    fs = require('fs'),
    path = require('path');

http.createServer(function(request, response) {
	console.log(request.url);
    var filePath = path.join(__dirname, 'server/'+request.url);


	fs.stat(filePath, function(err, stat) {
	    if(err == null) {
    var stat = fs.statSync(filePath);

    

    var readStream = fs.createReadStream(filePath).pipe(response);
	    }
	});




})
.listen(8080);
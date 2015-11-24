var express = require('express');
var app = express();

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/css', express.static(__dirname + '/css'));

app.use('/js', express.static(__dirname + '/js'));

app.use('/assets/video', express.static(__dirname + '/assets/video'));
app.use('/assets/img', express.static(__dirname + '/assets/img'));
app.use('/assets/img/videoStills', express.static(__dirname + '/assets/img/videoStills'));
app.use('/assets/logos', express.static(__dirname + '/assets/logos'));
app.use('/assets/fonts', express.static(__dirname + '/assets/fonts'));
app.use('/job.html', express.static(__dirname + '/job.html'));

app.get('*', function (req, res){
	res.sendFile('index.html', { root: __dirname});
});

var server = app.listen(3000, function(){
	console.log('server running');
});

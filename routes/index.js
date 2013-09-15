var io = require('socket.io').listen(3001);

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

io.sockets.on('connection', function (socket) {
socket.emit('examples', 'aaa');
socket.on('on', function (data) {
    console.log(data);
});

});